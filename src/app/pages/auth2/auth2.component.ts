import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { AdminModule } from './admin-module';
import { NewFunitureService } from '../user/landing-page/type-furniture/new-funiture/services/new-funiture-service.service';
import { BehaviorSubject } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginAdminForm } from './types/login-admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthAdminService } from './auth-admin.service';
import { MatDialog } from '@angular/material/dialog';
import { SignupAdmin2Component } from './signup-admin/signup-admin.component';
import { SignupAdminComponent } from '../admin/auth/signup-admin/signup-admin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.component.html',
  styleUrls: ['./auth2.component.scss'],
  standalone: true,
  imports: [AdminModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class Auth2Component implements OnInit {
  // Sử dụng BehaviorSubject để theo dõi trạng thái đăng nhập
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  // Observable để theo dõi trạng thái đăng nhập
  loggedIn$ = this.loggedInSubject.asObservable();

  showPassword = false;
  forgotPassword = false;
  login = '';
  password = '';
  emailForgot = new FormControl<string>('');
  // init form in constructor
  loginForm!: FormGroup<LoginAdminForm>;
  isViewOrder: boolean = false;
  isLoading = this.service.getLoading();
  constructor(
    private service: NewFunitureService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private notification: NzNotificationService,
    public newFunitureService: AuthAdminService,
    private dialog: MatDialog
  ) {
    this.loadForm();
  }

  ngOnInit() {}

  loadForm() {
    this.loginForm = this.fb.nonNullable.group<LoginAdminForm>({
      login: this.fb.nonNullable.control('', [Validators.required]),
      password: this.fb.nonNullable.control('', [Validators.required]),
    });
  }

  register() {
    this.router.navigate(['/admin2/register']);
  }

  loginnn() {
    const url = 'http://localhost:8080/login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { login: this.login, password: this.password };

    this.http.post(url, body, { headers }).subscribe(
      (response: any) => {
        if (response.token) {
          // Save token to local storage or a secure storage mechanism
          localStorage.setItem('access_token', response.token);

          // Set the isLogin status to true
          this.notification.success(
            'Thông báo',
            'Nhân viên đã đăng nhập thành công'
          );
          this.router.navigate(['/admin']);
          // this.loggedInSubject.next(true);
          this.newFunitureService.isLogin.next(true);

          // Fetch additional user details if needed
          // this.getAccountByAdmin(this.login);

          // Redirect or perform other actions as needed
          // ...
        } else {
          // Handle login failure
          this.notification.error(
            'Thông báo',
            'Sai tài khoản hoặc mật khẩu! Vui lòng kiểm tra lại!'
          );
          this.newFunitureService.isLogin.next(false);
        }
      },
      (error) => {
        // Handle login error
        console.error(error);
      }
    );
  }

  openPasswordRecoveryModal() {
    const dialogRef = this.dialog.open(SignupAdmin2Component, {
      width: '400px', // You can adjust the width and other options
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

  openModalForgotPassword() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      height: '90%',
      width: '100%', // You can adjust the width and other options
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
}
