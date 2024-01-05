import { Injectable } from '@angular/core';
import { Category } from '../category-manage/category';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';

@Injectable({
  providedIn: 'root',
})
export class CategoryAdminService {
  isCategory = new BehaviorSubject(false);
  listCategory = new BehaviorSubject<Category[]>([]);
  constructor(private http: HttpClient) {}

  public getListCategory(): Observable<Category[]> {
    return this.http
      .get<ResponseAPINoContent<Category[]>>(
        'http://localhost:8080/api/category/getAllCategory'
      )
      .pipe(
        map((res) => res.data),
        tap((data) => {
          if (this.isCategory.value) {
            this.listCategory.value;
          } else {
            this.listCategory.next(data);
          }
        })
      );
  }
}
