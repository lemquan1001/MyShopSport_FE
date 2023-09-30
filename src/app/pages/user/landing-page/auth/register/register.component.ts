import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {RegisterModule} from './register-module';
import {RegisterForm} from './types/register';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {NewFunitureService} from "../../type-furniture/new-funiture/services/new-funiture-service.service";
import {ResponseAPINoContent} from "../../../../../common/types/response-api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [RegisterModule]
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
    address: ''
  }
  constructor(private router: Router,
              private fb: FormBuilder,
              private http: HttpClient,
              private notification: NzNotificationService,
              public newFunitureService: NewFunitureService

  ) {
    this.loadForm();
  }


  ngOnInit() {
  }

  loadForm() {
    this.registerForm = this.fb.nonNullable.group<RegisterForm>({
      user: this.fb.nonNullable.control('', [Validators.required]),
      pass: this.fb.nonNullable.control('', [Validators.required]),
      name: this.fb.nonNullable.control('',[Validators.required]),
      phoneNumber: this.fb.nonNullable.control('',[Validators.pattern('^[0-9]{9,11}$')]),
      email: this.fb.nonNullable.control('',[Validators.email]),
      address: this.fb.nonNullable.control('',[Validators.required]),
    })
  }

  register() {
    const url = 'http://localhost:8080/api/account/addAccount';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body =
      {
        user: this.queryRegister.user,
        pass: this.queryRegister.pass,
        name: this.queryRegister.name,
        phoneNumber: this.queryRegister.phoneNumber,
        email: this.queryRegister.email,
        address: this.queryRegister.address,
      };

    this.http.post<ResponseAPINoContent<any>>(url, body, {headers}).subscribe(
      (response) => {
        console.log(response.data)
        this.router.navigate(['/login']);
        this.notification.success('Thông báo', "Đăng ký tài khoản thành công!")
        this.newFunitureService.email.next(response.data.email);
      },
      (error) => {
        this.notification.error('Thông báo', "Đăng ký tài khoản không thành công! Mời xem lại thông tin đăng ký!")
      }
    );
  }
  login(){
    this.router.navigate(['/login']);
  }
}
