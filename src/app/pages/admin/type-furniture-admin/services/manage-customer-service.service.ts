import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { ManageCustomer } from '../manage-customer/customer';
import { HttpClient } from '@angular/common/http';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';

@Injectable({
  providedIn: 'root',
})
export class CustomerAdminService {
  isCustomer = new BehaviorSubject(false);
  listCustomer = new BehaviorSubject<ManageCustomer[]>([]);

  constructor(private http: HttpClient) {}

  public getListCustomer(): Observable<ManageCustomer[]> {
    return this.http
      .get<ResponseAPINoContent<ManageCustomer[]>>(
        'http://localhost:8080/api/account/getAllAccout'
      )
      .pipe(
        map((res) => res.data),
        tap((data) => {
          if (this.isCustomer.value) {
            this.listCustomer.value;
          } else {
            this.listCustomer.next(data);
          }
        })
      );
  }

  public addCustomer(customer: ManageCustomer): Observable<ManageCustomer> {
    return this.http.post<ManageCustomer>(
      `http://localhost:8080/api/account/addAccount`,
      customer
    );
  }

  public updateCustomer(customer: ManageCustomer): Observable<ManageCustomer> {
    return this.http.put<ManageCustomer>(
      `http://localhost:8080/api/account/updateAccount`,
      customer
    );
  }

  public deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(
      `http://localhost:8080/api/account/deleteAccount/${id}`
    );
  }
}
