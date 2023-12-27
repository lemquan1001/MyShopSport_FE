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

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
  standalone: true,
  imports: [LoginAdminModule, RouterLink, NzStepsModule],
  // providers: [DestroyService],
})
export class LoginAdminComponent implements OnInit {
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
    const body = { user: this.login, pass: this.password };

    this.http.post<ResponseAPINoContent<any>>(url, body, { headers }).subscribe(
      (response) => {
        if (response.data) {
          this.notification.success('Thông báo', 'Đăng nhập thành công!');
          this.newFunitureService.isLogin.next(true);
          this.router
            .navigateByUrl('/admin/login', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/admin/login']);
            });
          this.getAccountByAdmin(this.login);
        } else {
          this.notification.error(
            'Thông báo',
            'Sai tài khoản hoặc mật khẩu! Vui lòng kiểm tra lại!'
          );
          this.newFunitureService.isLogin.next(false);
        }
      },
      (error) => {
        // this.notification.error('Thông báo', "Sai tài khoản hoặc mật khẩu! Vui lòng kiểm tra lại!")
        // this.newFunitureService.isLogin.next(false);
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
        // this.newFunitureService.name.next(res.data.name);
        // this.newFunitureService.phoneNumber.next(res.data.phoneNumber);
        // this.newFunitureService.address.next(res.data.address);
      });
  }
}
