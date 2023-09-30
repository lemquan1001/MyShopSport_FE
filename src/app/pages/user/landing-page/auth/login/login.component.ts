import {Router, RouterLink} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {LoginModule} from './login-module';
import {LoginForm} from './types/login';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NzNotificationModule, NzNotificationService} from 'ng-zorro-antd/notification';
import {NewFunitureService} from "../../type-furniture/new-funiture/services/new-funiture-service.service";
import {ResponseAPIContent, ResponseAPINoContent} from "../../../../../common/types/response-api";
import Swal from "sweetalert2";
import {NzStepsModule} from "ng-zorro-antd/steps";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [LoginModule, RouterLink, NzStepsModule]
})
export class LoginComponent implements OnInit {
  showPassword = false;
  forgotPassword = false;
  email = '';
  pass = '';
  emailForgot = new FormControl<string>('');
  // init form in constructor
  loginForm!: FormGroup<LoginForm>;
  isViewOrder: boolean= false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private notification: NzNotificationService,
    public newFunitureService: NewFunitureService
  ) {
    this.loadForm();
  }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/register'])
  }

  loadForm() {
    this.loginForm = this.fb.nonNullable.group<LoginForm>({
      email: this.fb.nonNullable.control('', [Validators.required]),
      password: this.fb.nonNullable.control('', [Validators.required])
    })
  }

  login() {
    const url = 'http://localhost:8080/api/login';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {user: this.email, pass: this.pass};

    this.http.post<ResponseAPINoContent<any>>(url, body, {headers}).subscribe(
      (response) => {
        if (response.data){
          this.notification.success('Thông báo', "Đăng nhập thành công!")
          this.newFunitureService.isLogin.next(true);
          this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/login']);
          });
          this.getAccountByUser(this.email);
        }else {
          this.notification.error('Thông báo', "Sai tài khoản hoặc mật khẩu! Vui lòng kiểm tra lại!")
          this.newFunitureService.isLogin.next(false);

        }
      },
      (error) => {
        // this.notification.error('Thông báo', "Sai tài khoản hoặc mật khẩu! Vui lòng kiểm tra lại!")
        // this.newFunitureService.isLogin.next(false);
      }
    );
  }
  logOut(){
    Swal.fire({
      title: 'Bạn có chắc chắn muốn đăng xuất không?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đăng xuất',
      cancelButtonText: 'Quay lại',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.confirmLogout()
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    })

  }
  confirmLogout(){
    this.newFunitureService.isLogin.next(false);
    this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/login']);
    });
    this.notification.info('Thông báo', 'Bạn đã đăng xuất khỏi tài khoản!')
    // Swal.fire(
    //   {
    //     title: 'Xóa thành công!',
    //     icon: 'success'
    //   }
    // );
  }
  viewOrder(){
    this.isViewOrder = true;
    this.getBillByEmail(this.newFunitureService.email.value);
  }
  getBillByEmail(email: string){
    return  this.http.get<ResponseAPINoContent<any>>(`http://localhost:8080/api/bill/getBillById/${email}`).subscribe(res=>{
      this.newFunitureService.listBillByEmail.next(res.data);
      console.log(this.newFunitureService.listBillByEmail.value);
      console.log(this.newFunitureService.listBillByEmail.value[0].status);
    })
  }
  getAccountByUser(user: string){
    return  this.http.get<ResponseAPINoContent<any>>(`http://localhost:8080/api/account/getAccountByUser/${user}`).subscribe(res=>{
      this.newFunitureService.userName.next(res.data.user);
      this.newFunitureService.email.next(res.data.email);
      this.newFunitureService.name.next(res.data.name);
      this.newFunitureService.phoneNumber.next(res.data.phoneNumber);
      this.newFunitureService.address.next(res.data.address);
    })
  }
}
