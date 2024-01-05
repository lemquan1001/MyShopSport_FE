import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { SignupAdminModule } from './signup-admin-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupAdminForm } from './types/signup-admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthAdminService } from '../service/auth-admin.service';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.scss'],
  standalone: true,
  imports: [SignupAdminModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class SignupAdminComponent implements OnInit {
  showPassword = false;
  registerForm!: FormGroup<SignupAdminForm>;
  queryRegister = {
    userName: '',
    login: '',
    password: '',
  };
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private notification: NzNotificationService,
    public newFunitureService: AuthAdminService
  ) {
    this.loadForm();
  }

  ngOnInit() {}

  loadForm() {
    this.registerForm = this.fb.nonNullable.group<SignupAdminForm>({
      userName: this.fb.nonNullable.control('', [Validators.required]),
      login: this.fb.nonNullable.control('', [Validators.required]),
      password: this.fb.nonNullable.control('', [Validators.required]),
    });
  }

  register() {
    const url = 'http://localhost:8080/register';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      userName: this.queryRegister.userName,
      login: this.queryRegister.login,
      password: this.queryRegister.password,
    };

    this.http.post<ResponseAPINoContent<any>>(url, body, { headers }).subscribe(
      (response) => {
        console.log(response.data);
        this.router.navigate(['/admin/login']);
        this.notification.success('Thông báo', 'Đăng ký tài khoản thành công!');
        this.newFunitureService.email.next(response.data.email);
      },
      (error) => {
        this.notification.error(
          'Thông báo',
          'Đăng ký tài khoản không thành công! Mời xem lại thông tin đăng ký!'
        );
      }
    );
  }
  login() {
    this.router.navigate(['/admin/login']);
  }
}
