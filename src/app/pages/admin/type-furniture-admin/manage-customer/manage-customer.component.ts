import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { ManageCustomerModule } from './manage-customer-module';
import { CustomerAdminService } from '../services/manage-customer-service.service';
import { ManageCustomer } from './customer';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss'],
  standalone: true,
  imports: [ManageCustomerModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class ManageCustomerComponent {
  public customers: ManageCustomer[] = [];
  public editCustomer: ManageCustomer;
  public deleteCustomer: ManageCustomer;
  constructor(public detailCustomerService: CustomerAdminService) {}

  ngOnInit(): void {
    this.getListCustomer();
  }

  getListCustomer() {
    this.detailCustomerService.getListCustomer().subscribe(
      (data: ManageCustomer[]) => {
        this.customers = data;
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

  public onAddCustomer(addForm: NgForm): void {
    document.getElementById('add-customer-form')?.click();
    this.detailCustomerService.addCustomer(addForm.value).subscribe(
      (reponse: ManageCustomer) => {
        console.log(reponse);
        this.getListCustomer();
        addForm.reset(); //clear form sau khi tạo
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset(); //clear form sau khi tạo
      }
    );
  }

  public onUpdateCustomer(customer: ManageCustomer): void {
    this.detailCustomerService.updateCustomer(customer).subscribe(
      (reponse: ManageCustomer) => {
        console.log(reponse);
        this.getListCustomer();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCustomer(id: number): void {
    this.detailCustomerService.deleteCustomer(id).subscribe(
      (reponse: void) => {
        console.log(reponse);
        this.getListCustomer();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(customer: ManageCustomer, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductModal');
    }
    if (mode === 'edit') {
      this.editCustomer = customer;
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (mode === 'delete') {
      this.deleteCustomer = customer;
      button.setAttribute('data-target', '#deleteProductModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
