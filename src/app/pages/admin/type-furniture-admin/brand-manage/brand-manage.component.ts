import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { BrandManageModule } from './brand-manage-module';
import { Brand } from './brand';
import { BrandAdminService } from '../services/brand-manage-service.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-brand-manage',
  templateUrl: './brand-manage.component.html',
  styleUrls: ['./brand-manage.component.scss'],
  standalone: true,
  imports: [BrandManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class BrandManageComponent {
  public brands: Brand[] = [];
  public editBrand: Brand;
  public deleteBrand: Brand;
  constructor(public detailBrandService: BrandAdminService) {}

  ngOnInit(): void {
    this.getListBrand();
  }

  getListBrand() {
    this.detailBrandService.getListBrand().subscribe(
      (data: Brand[]) => {
        this.brands = data;
        // Set giá trị cho editProduct nếu có sản phẩm đầu tiên
        // if (this.customers && this.customers.length > 0) {
        //   this.editCustomer = this.customers[0]; // Đây chỉ là ví dụ, bạn có thể chọn sản phẩm khác để gán cho editProduct
        // }
      },
      (error) => {
        console.error('Error fetching customers: ', error);
      }
    );
  }

  public onAddBrand(addForm: NgForm): void {
    document.getElementById('add-customer-form')?.click();
    this.detailBrandService.addBrand(addForm.value).subscribe(
      (reponse: Brand) => {
        console.log(reponse);
        this.getListBrand();
        addForm.reset(); //clear form sau khi tạo
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset(); //clear form sau khi tạo
      }
    );
  }

  public onUpdateBrand(customer: Brand): void {
    this.detailBrandService.updateBrand(customer).subscribe(
      (reponse: Brand) => {
        console.log(reponse);
        this.getListBrand();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteBrand(id: number): void {
    this.detailBrandService.deleteBrand(id).subscribe(
      (reponse: void) => {
        console.log(reponse);
        this.getListBrand();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(brand: Brand, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductModal');
    }
    if (mode === 'edit') {
      this.editBrand = brand;
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (mode === 'delete') {
      this.deleteBrand = brand;
      button.setAttribute('data-target', '#deleteProductModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
