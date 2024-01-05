import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Brand } from '../brand-manage/brand';
import { HttpClient } from '@angular/common/http';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';

@Injectable({
  providedIn: 'root',
})
export class BrandAdminService {
  isBrand = new BehaviorSubject(false);
  listBrand = new BehaviorSubject<Brand[]>([]);

  constructor(private http: HttpClient) {}

  public getListBrand(): Observable<Brand[]> {
    return this.http
      .get<ResponseAPINoContent<Brand[]>>(
        'http://localhost:8080/api/brand/getAllBrand'
      )
      .pipe(
        map((res) => res.data),
        tap((data) => {
          if (this.isBrand.value) {
            this.listBrand.value;
          } else {
            this.listBrand.next(data);
          }
        })
      );
  }

  public addBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(
      `http://localhost:8080/api/brand/addBrand`,
      brand
    );
  }

  public updateBrand(brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(
      `http://localhost:8080/api/brand/updateBrand`,
      brand
    );
  }

  public deleteBrand(id: number): Observable<void> {
    return this.http.delete<void>(
      `http://localhost:8080/api/brand/deleteBrand/${id}`
    );
  }
}
