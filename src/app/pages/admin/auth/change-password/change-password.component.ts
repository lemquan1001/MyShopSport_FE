import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { ChangePassModule } from './change-password-module';
import { AuthAdminService } from '../service/auth-admin.service';
import { DestroyService } from 'src/app/common/service/destroy.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  standalone: true,
  imports: [ChangePassModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class ChangePasswordComponent {
  // Khai báo các thuộc tính ở đây
  login: string = '';
  oldPassword: string = '';
  newPassword: string = '';

  constructor(private forgotPasswordService: AuthAdminService) {}

  // Function to handle the forgot-password action
  onForgotPassword(): void {
    this.forgotPasswordService
      .forgotPassword(this.login, this.oldPassword, this.newPassword)
      .subscribe(
        (response) => {
          // Check the response for success and display appropriate message
          if (
            response &&
            response.message === 'Password changed successfully'
          ) {
            alert('Password changed successfullyy');
          }
        },
        (error) => {
          console.error('An error occurred:', error);
          alert('Password change failed');
        }
      );
  }
}
