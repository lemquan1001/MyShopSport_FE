import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  debounceTime,
  finalize,
  of,
  switchMap,
} from 'rxjs';
import { Pageable } from 'src/app/common/types/pageable';
import {
  ResponseAPIContent,
  ResponseAPINoContent,
} from 'src/app/common/types/response-api';
import { CardItem } from 'src/app/pages/user/landing-page/type-furniture/new-funiture/types/card-item';
import { Category } from 'src/app/pages/user/landing-page/type-furniture/new-funiture/types/category';
import { PayloadProduct } from 'src/app/pages/user/landing-page/type-furniture/new-funiture/types/payload-product';
import { Bill } from 'src/app/pages/user/landing-page/type-furniture/new-funiture/types/payment';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminService {
  isLogin = new BehaviorSubject<boolean>(false);
  userName = new BehaviorSubject<string>('');
  email = new BehaviorSubject<string>('');
  isLoading$ = new BehaviorSubject(false);
  private apiUrlForgot = 'http://localhost:8080/change-password';

  constructor(private http: HttpClient) {}
  getLoading() {
    return this.isLoading$.asObservable();
  }
  logout(): void {
    this.isLogin.next(false);
  }

  // Function to send the forgot-password request
  forgotPassword(
    login: string,
    oldPassword: string,
    newPassword: string
  ): Observable<any> {
    const data = {
      login: login,
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.apiUrlForgot, data, { headers: headers });
  }
}
