import { Component, OnInit } from '@angular/core';
import { BillManageModule } from './bill-manage-module';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BillAdminService } from '../services/bill-admin-service.service';
import { Bill } from 'src/app/pages/user/landing-page/type-furniture/new-funiture/types/payment';
import { BillManage } from './bill';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';
import { FormModule } from 'src/app/common/form-dynamic/form-module';

@Component({
  selector: 'app-bill-manage',
  templateUrl: './bill-manage.component.html',
  styleUrls: ['./bill-manage.component.scss'],
  standalone: true,
  imports: [BillManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class BillManageComponent {
  public bills: BillManage[] = [];
  public editBill: BillManage;
  public deleteBill: BillManage;

  public selectedOptionText: string = 'Dropdown'; // Default text for the button
  constructor(public detailBillService: BillAdminService) {}

  ngOnInit(): void {
    this.getBillBySTT();
  }

  getBillBySTT() {
    this.detailBillService.getBillBySTT0().subscribe(
      (data: BillManage[]) => {
        this.bills = data;
        // Set giá trị cho editProduct nếu có sản phẩm đầu tiên
        // if (this.bills && this.bills.length > 0) {
        //   this.editBill = this.bills[0]; // Đây chỉ là ví dụ, bạn có thể chọn sản phẩm khác để gán cho editProduct
        // }
      },
      (error) => {
        console.error('Error fetching bills: ', error);
      }
    );
  }

  onDropdownSelection(selectedValue: number, selectedText: string) {
    // Update the selected text for the button
    this.selectedOptionText = selectedText;

    // Use a switch statement or if-else to determine which API to call based on the selected value
    switch (selectedValue) {
      case 0:
        this.detailBillService.getBillBySTT0().subscribe(
          (data: BillManage[]) => this.updateTableData(data),
          (error) => console.error('Error fetching bills: ', error)
        );
        break;
      case 1:
        this.detailBillService.getBillBySTT1().subscribe(
          (data: BillManage[]) => this.updateTableData(data),
          (error) => console.error('Error fetching bills: ', error)
        );
        break;
      case 2:
        this.detailBillService.getBillBySTT2().subscribe(
          (data: BillManage[]) => this.updateTableData(data),
          (error) => console.error('Error fetching bills: ', error)
        );
        break;
      case 3:
        this.detailBillService.getBillBySTT3().subscribe(
          (data: BillManage[]) => this.updateTableData(data),
          (error) => console.error('Error fetching bills: ', error)
        );
        break;
      default:
        console.error('Invalid dropdown selection');
    }
  }

  private updateTableData(data: BillManage[]) {
    this.bills = data;
    // Set giá trị cho editProduct nếu có sản phẩm đầu tiên
    if (this.bills && this.bills.length > 0) {
      this.editBill = this.bills[0];
    }
  }

  checkClick() {
    alert('hello');
  }

  public onUpdateBill(bill: BillManage): void {
    this.detailBillService.updateBill(bill).subscribe(
      (reponse: BillManage) => {
        console.log(reponse);
        this.getBillBySTT();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // public onOpenModal(bill: BillManage, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'edit') {
  //     this.editBill = bill;
  //     button.setAttribute('data-target', '#updateProductModal');
  //   }
  //   if (mode === 'delete') {
  //     this.deleteBill = bill;
  //     button.setAttribute('data-target', '#deleteProductModal');
  //   }
  //   container?.appendChild(button);
  //   button.click();
  // }

  public onOpenModal(bill: BillManage, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'edit') {
      this.editBill = bill;
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (mode === 'delete') {
      this.deleteBill = this.deleteBill;
      button.setAttribute('data-target', '#deleteProductModal');
    }

    container?.appendChild(button);
    button.click();
  }
}
