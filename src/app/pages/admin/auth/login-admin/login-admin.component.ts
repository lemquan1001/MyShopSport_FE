import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { LoginAdminModule } from './login-admin-module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthAdminService } from '../service/auth-admin.service';
import { LoginAdminForm } from './types/login-admin';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
  standalone: true,
  imports: [LoginAdminModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class LoginAdminComponent implements OnInit {
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
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private notification: NzNotificationService,
    public newFunitureService: AuthAdminService
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
    this.router.navigate(['/admin/signup']);
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
          this.router.navigate(['/admin/product-manage']);
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

  getAccountByAdmin(user: string) {
    return this.http
      .get<ResponseAPINoContent<any>>(
        `http://localhost:8080/getAccountByAdmin/${user}`
      )
      .subscribe((res) => {
        this.newFunitureService.userName.next(res.data.username);
        this.newFunitureService.email.next(res.data.login);
      });
  }
}
