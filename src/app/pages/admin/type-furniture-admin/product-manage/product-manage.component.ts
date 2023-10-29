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
  constructor(
    private http: HttpClient,

    // public detailFunitureService: DetailProductServiceService
    public detailFunitureService: ProductAdminService
  ) {}

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct() {
    return this.http
      .get<ResponseAPINoContent<Product[]>>(
        'http://localhost:8080/api/productT/getAllProducts'
      )
      .subscribe((res) => {
        {
          if (res) {
            if (this.detailFunitureService.isProductsByCategory.value) {
              this.detailFunitureService.listProduct.value;
            } else {
              this.detailFunitureService.listProduct.next(res.data);
            }
          }
        }
      });
  }

  // public onAddProduct(addForm: NgForm): void {
  //   document.getElementById('add-product-form')?.click();
  //   this.detailFunitureService.addProduct(addForm.value).subscribe(
  //     (reponse: Product) => {
  //       console.log(reponse);
  //       this.getListProduct();
  //       addForm.reset(); //clear form sau khi tạo
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.reset(); //clear form sau khi tạo
  //     }
  //   );
  // }

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

  public onOpenModal(product: Product, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductModal');
      alert('hello');
    }
    // if (mode === 'edit') {
    //   this.editProduct = product;
    //   button.setAttribute('data-target', '#updateProductModal');
    // }
    // if (mode === 'delete') {
    //   this.deleteEmployee = product;
    //   button.setAttribute('data-target', '#deleteProductModal');
    // }
    container?.appendChild(button);
    button.click();
  }
}
