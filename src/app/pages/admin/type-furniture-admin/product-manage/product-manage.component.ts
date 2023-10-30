import { Component, OnInit } from '@angular/core';
import { ProductManageModule } from './product-manage-module';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';
import { CardItem } from 'src/app/pages/user/landing-page/type-furniture/new-funiture/types/card-item';
import { DetailProductServiceService } from 'src/app/pages/user/landing-page/type-furniture/new-funiture/services/detail-product-service.service';
import { ProductAdminService } from '../services/product-admin-service.service';
import { Product } from './product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss'],
  standalone: true,
  imports: [ProductManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class ProductManageComponent implements OnInit {
  public products: Product[];
  public editProduct: Product;
  public deleteProduct: Product;
  constructor(
    private http: HttpClient,

    // public detailFunitureService: DetailProductServiceService
    public detailFunitureService: ProductAdminService
  ) {}

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct() {
    this.detailFunitureService.getListProduct().subscribe(
      (data: Product[]) => {
        this.products = data;
        // Set giá trị cho editProduct nếu có sản phẩm đầu tiên
        if (this.products && this.products.length > 0) {
          this.editProduct = this.products[0]; // Đây chỉ là ví dụ, bạn có thể chọn sản phẩm khác để gán cho editProduct
        }
      },
      (error) => {
        console.error('Error fetching products: ', error);
      }
    );
  }

  public onAddProduct(addForm: NgForm): void {
    const product: any = addForm.value; // Lấy dữ liệu từ form
    // Tạo một object mới để lưu trữ thông tin của category
    const categoryInfo = {
      id: product.categoryId, // Sử dụng categoryId từ form
      // Các thông tin khác của category nếu cần
    };
    // Gán thông tin của category vào product
    product.category = categoryInfo;
    // Gửi yêu cầu thêm product lên server
    this.detailFunitureService.addProduct(product).subscribe(
      (response: any) => {
        console.log(response);
        this.getListProduct();
        addForm.reset(); // Xóa form sau khi thêm
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset(); // Xóa form sau khi thêm
      }
    );
  }

  public onUpdateProduct(product: Product): void {
    this.detailFunitureService.updateProduct(product).subscribe(
      (reponse: Product) => {
        console.log(reponse);
        this.getListProduct();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProduct(id: number): void {
    this.detailFunitureService.deleteProduct(id).subscribe(
      (reponse: void) => {
        console.log(reponse);
        this.getListProduct();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(product: Product, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductModal');
    }
    if (mode === 'edit') {
      this.editProduct = product;
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (mode === 'delete') {
      this.deleteProduct = product;
      button.setAttribute('data-target', '#deleteProductModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
