import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Admin } from './admin';
import { HttpClient } from '@angular/common/http';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';

@Injectable({
  providedIn: 'root',
})
export class ChangeRoleService {
  isAdmin = new BehaviorSubject(false);
  listAdmin = new BehaviorSubject<Admin[]>([]);

  constructor(private http: HttpClient) {}

  public getListAdmin(): Observable<Admin[]> {
    return this.http
      .get<ResponseAPINoContent<Admin[]>>('http://localhost:8080/getAllAdmin')
      .pipe(
        map((res) => res.data),
        tap((data) => {
          if (this.isAdmin.value) {
            this.listAdmin.value;
          } else {
            this.listAdmin.next(data);
          }
        })
      );
  }

  // public addCustomer(customer: ManageCustomer): Observable<ManageCustomer> {
  //   return this.http.post<ManageCustomer>(
  //     `http://localhost:8080/api/account/addAccount`,
  //     customer
  //   );
  // }

  public updateAdmin(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`http://localhost:8080/updateAdmin`, admin);
  }

  // public deleteCustomer(id: number): Observable<void> {
  //   return this.http.delete<void>(
  //     `http://localhost:8080/api/account/deleteAccount/${id}`
  //   );
  // }
}
