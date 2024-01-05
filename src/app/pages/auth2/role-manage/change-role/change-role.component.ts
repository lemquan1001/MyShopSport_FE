import { Component } from '@angular/core';
import { ChangRoleModule } from './chang-role';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { ChangeRoleService } from './chang-role-service.service';
import { Admin } from './admin';
import { HttpErrorResponse } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-change-role',
  templateUrl: './change-role.component.html',
  styleUrls: ['./change-role.component.scss'],
  standalone: true,
  imports: [ChangRoleModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class ChangeRoleComponent {
  public admins: Admin[] = [];
  public editAdmin: Admin;
  public deleteAdmin: Admin;
  constructor(
    public changeRoleService: ChangeRoleService,
    private notification: NzNotificationService
  ) {}
  ngOnInit(): void {
    this.getListAdmin();
  }

  getListAdmin() {
    this.changeRoleService.getListAdmin().subscribe(
      (data: Admin[]) => {
        this.admins = data;
      },
      (error) => {
        console.error('Error fetching customers: ', error);
      }
    );
  }

  public onUpdateAdmin(admin: Admin): void {
    this.changeRoleService.updateAdmin(admin).subscribe(
      (reponse: Admin) => {
        console.log(reponse);
        this.getListAdmin();
        this.notification.success(
          'Thông báo',
          'Đã cập nhật quyền của nhân viên thành công'
        );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(admin: Admin, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductModal');
    }
    if (mode === 'edit') {
      // this.editAdmin = admin;
      // button.setAttribute('data-target', '#updateProductModal');

      const enableValue = prompt(
        `Enter new ENABLE value for admin with ID ${admin.id}:`,
        admin.enable
      );
      if (enableValue !== null) {
        // Người dùng đã nhập giá trị và nhấn OK
        const updatedAdmin: Admin = {
          ...admin,
          enable: enableValue,
        };

        // Thực hiện các thao tác cần thiết với updatedAdmin
        this.onUpdateAdmin(updatedAdmin);
      } else {
        // Người dùng đã nhấn Cancel hoặc không nhập giá trị
        console.log('Update operation canceled.');
      }
    }
    if (mode === 'delete') {
      // this.deleteAdmin = admin;
      // button.setAttribute('data-target', '#deleteProductModal');
      if (mode === 'delete') {
        // Implementing the delete logic similar to your existing code
        const confirmDelete = confirm(
          `Are you sure you want to delete admin with ID ${admin.id}?`
        );

        if (confirmDelete) {
          this.onDeleteAdmin(admin.id);
        } else {
          console.log('Delete operation canceled.');
        }
      }
    }
    container?.appendChild(button);
    button.click();
  }

  public onDeleteAdmin(id: number): void {
    this.changeRoleService.deleteAdmin(id).subscribe(
      (reponse: void) => {
        console.log(reponse);
        this.getListAdmin();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
