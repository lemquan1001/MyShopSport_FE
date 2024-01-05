import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { ForgotPasswordModule } from './forgot-password-module';
import { AuthAdminService } from '../auth-admin.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [ForgotPasswordModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(
    private forgotPasswordService: AuthAdminService,
    private notification: NzNotificationService
  ) {}

  sendResetPasswordRequest() {
    this.forgotPasswordService.sendResetPasswordRequest(this.email).subscribe(
      (response) => {
        console.log('Response:', response);
        // this.notification.info('Thông báo', 'Đăng nhập thành công1!');
        // this.notification.error('Thông báo', 'Đăng nhập thành công2!');
      },
      (error) => {
        console.error('Error:', error);
        this.notification.success(
          'Thông báo',
          'Đã reset password của bạn, vui lòng check gmail.'
        );
      }
    );
  }
}
