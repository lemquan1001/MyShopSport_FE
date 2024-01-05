import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { RoleManageModule } from './role-manage';
import { MatDialog } from '@angular/material/dialog';
import { ChangeRoleComponent } from './change-role/change-role.component';

@Component({
  selector: 'app-role-manage',
  templateUrl: './role-manage.component.html',
  styleUrls: ['./role-manage.component.scss'],
  standalone: true,
  imports: [RoleManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class RoleManageComponent implements OnInit {
  showPassword = false;

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private dialog: MatDialog) {}
  ngOnInit() {}

  openModalChangRole() {
    const dialogRef = this.dialog.open(ChangeRoleComponent, {
      height: '80%',
      width: '60%', // You can adjust the width and other options
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        // Handle the result when the modal is closed
        console.log('Modal closed with result:', result);
      },
      (reason) => {
        // Handle the reason when the modal is dismissed
        console.log('Modal dismissed with reason:', reason);
      }
    );
  }

  userCredentials: { username: string; password: string }[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more sets as needed
  ];
  login() {
    // Check if the entered credentials match any set in the array
    const validCredentials = this.userCredentials.some(
      (cred) =>
        cred.username === this.username && cred.password === this.password
    );

    if (validCredentials) {
      alert('Đăng nhập thành công.');
      this.openModalChangRole();
      this.errorMessage = '';
    } else {
      alert('Lỗi !!! Vui lòng đăng nhập lại.');
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
