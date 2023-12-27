import { HttpClient } from '@angular/common/http';
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
  // name = new BehaviorSubject<string>('');
  // phoneNumber = new BehaviorSubject<string>('');
  // address = new BehaviorSubject<string>('');
  // billId = new BehaviorSubject(null);
  // // listBillByEmail= new   BehaviorSubject<Bill[]>([]);
  // listBillByEmail = new BehaviorSubject<Bill[]>([]);
  // private readonly BASE_URL = environment.server;
  isLoading$ = new BehaviorSubject(false);
  // pageIndex$ = new BehaviorSubject(1);
  // pageSize$ = new BehaviorSubject(5);
  // sort$ = new BehaviorSubject<{ key: string; order: NzTableSortOrder }>({
  //   key: 'updated_date',
  //   order: 'desc',
  // });
  constructor(private http: HttpClient) {}
  // search(): Observable<any> {
  //   return combineLatest({
  //     // minPrice: this.minPrice$,
  //     // maxPrice: this.maxPrice$,
  //     // colors: this.colortArr$,
  //     page: this.pageIndex$,
  //     pageSize: this.pageSize$,
  //     sort: this.sort$,
  //   }).pipe(
  //     debounceTime(500),
  //     switchMap(({ page, pageSize, sort }) => {
  //       let body: Partial<PayloadProduct> = {
  //         // colors: colors,
  //         // fromPrice: minPrice,
  //         // toPrice: maxPrice
  //         // minPrice, maxPrice, colors,
  //       };

  //       let pageable: Pageable = {
  //         page: page - 1,
  //         pageSize: pageSize,
  //         sort: sort.key,
  //         order: sort.order,
  //       };
  //       this.isLoading$.next(true);
  //       return this.searchProduct(body, pageable).pipe(
  //         catchError((err) => of('')),
  //         finalize(() => this.isLoading$.next(false))
  //       );
  //     })
  //   );
  // }
  // searchProduct(
  //   body: Partial<PayloadProduct>,
  //   pageable: Pageable
  // ): Observable<ResponseAPIContent<CardItem[]>> {
  //   return this.http.post<ResponseAPIContent<CardItem[]>>(
  //     `${this.BASE_URL}/product/search?page=${pageable.page}&size=${pageable.pageSize}&sort=${pageable.sort},${pageable.order}`,
  //     body
  //   );
  // }
  getLoading() {
    return this.isLoading$.asObservable();
  }

  // // getListColor(name = '') {
  // //   return this.http.get<ResponseAPINoContent<Color[]>>(`${this.BASE_URL}/color/search?name=${name}`);
  // // }
  // getListCategory() {
  //   return this.http.get<ResponseAPINoContent<Category[]>>(
  //     `${this.BASE_URL}/category/getAllCategory`
  //   );
  // }
  // getProductsByCategory(id: number) {
  //   return this.http.get<ResponseAPINoContent<CardItem[]>>(
  //     `${this.BASE_URL}/productT/getProductByCategory/${id}`
  //   );
  // }
  // getProductsByName(name: string) {
  //   return this.http.get<ResponseAPINoContent<CardItem[]>>(
  //     `${this.BASE_URL}/productT/getProductByName/${name}`
  //   );
  // }
  // getListProduct() {
  //   return this.http.get<ResponseAPINoContent<CardItem[]>>(
  //     'http://localhost:8080/api/productT/getAllProductsEnable'
  //   );
  // }
}
