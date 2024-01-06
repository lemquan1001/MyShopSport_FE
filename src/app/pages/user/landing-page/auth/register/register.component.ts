import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterModule } from './register-module';
import { RegisterForm } from './types/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NewFunitureService } from '../../type-furniture/new-funiture/services/new-funiture-service.service';
import { ResponseAPINoContent } from '../../../../../common/types/response-api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [RegisterModule],
})
export class RegisterComponent implements OnInit {
  showPassword = false;
  registerForm!: FormGroup<RegisterForm>;
  queryRegister = {
    user: '',
    pass: '',
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
  };

  controlStatus: { [key: string]: boolean } = {
    user: false,
    pass: false,
    name: false,
    phoneNumber: false,
    email: false,
    address: false,
  };
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private notification: NzNotificationService,
    public newFunitureService: NewFunitureService
  ) {
    this.loadForm();
  }

  ngOnInit() {}

  private noLeadingTrailingWhitespace: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value: string = control.value;
    if (value && value.trim() !== value) {
      return { noLeadingTrailingWhitespace: true };
    }
    return null;
  };

  loadForm() {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    this.registerForm = this.fb.nonNullable.group<RegisterForm>({
      user: this.fb.nonNullable.control('', [
        Validators.required,
        this.noLeadingTrailingWhitespace,
      ]),
      pass: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.pattern(passwordPattern),
        this.noLeadingTrailingWhitespace,
      ]),
      name: this.fb.nonNullable.control('', [
        Validators.required,
        this.noLeadingTrailingWhitespace,
      ]),
      phoneNumber: this.fb.nonNullable.control('', [
        Validators.pattern('^[0-9]{9,12}$'),
        this.noLeadingTrailingWhitespace,
      ]),
      email: this.fb.nonNullable.control('', [
        Validators.email,
        this.noLeadingTrailingWhitespace,
      ]),
      address: this.fb.nonNullable.control('', [Validators.required]),
    });

    Object.keys(this.registerForm.controls).forEach((controlName) => {
      const control = this.registerForm.get(controlName);
      if (control) {
        control.statusChanges.subscribe((status) => {
          this.controlStatus[controlName] = status === 'INVALID';
        });
      }
    });
  }

  register() {
    const url = 'http://localhost:8080/api/account/addAccount';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      user: this.queryRegister.user,
      pass: this.queryRegister.pass,
      name: this.queryRegister.name,
      phoneNumber: this.queryRegister.phoneNumber,
      email: this.queryRegister.email,
      address: this.queryRegister.address,
    };

    this.http.post<ResponseAPINoContent<any>>(url, body, { headers }).subscribe(
      (response) => {
        console.log(response.data);
        this.router.navigate(['/login']);
        this.notification.success('Thông báo', 'Đăng ký tài khoản thành công!');
        this.newFunitureService.email.next(response.data.email);
      },
      (error) => {
        this.notification.error(
          'Thông báo',
          // 'Đăng ký tài khoản không thành công! Mời xem lại thông tin đăng ký!'
          'Tài khoản Email đã tồn tại , hãy đăng ký tài khoản với một địa chỉ khác !'
        );
      }
    );
  }
  login() {
    this.router.navigate(['/login']);
  }
}
