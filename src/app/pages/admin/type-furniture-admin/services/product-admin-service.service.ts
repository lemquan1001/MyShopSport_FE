import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Product } from '../product-manage/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';
import { Category } from '../category-manage/category';
import { Brand } from '../brand-manage/brand';

@Injectable({
  providedIn: 'root',
})
export class ProductAdminService {
  isProductsByCategory = new BehaviorSubject(false);
  listProduct = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  public getListProduct(): Observable<Product[]> {
    return this.http
      .get<ResponseAPINoContent<Product[]>>(
        'http://localhost:8080/api/productT/getAllProducts'
      )
      .pipe(
        map((res) => res.data),
        tap((data) => {
          if (this.isProductsByCategory.value) {
            this.listProduct.value;
          } else {
            this.listProduct.next(data);
          }
        })
      );
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      // 'http://localhost:8080/api/productT/addProductT',
      `http://localhost:8080/api/productT/addProductT`,
      product
    );
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `http://localhost:8080/api/productT/updateProductT`,
      product
    );
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(
      `http://localhost:8080/api/productT/deleteProductT/${id}`
    );
  }

  public getCategories(): Observable<Category[]> {
    return this.http
      .get<ResponseAPINoContent<Category[]>>(
        'http://localhost:8080/api/category/getAllCategory'
      )
      .pipe(map((res) => res.data));
  }

  public getBrands(): Observable<Brand[]> {
    return this.http
      .get<ResponseAPINoContent<Brand[]>>(
        'http://localhost:8080/api/brand/getAllBrand'
      )
      .pipe(map((res) => res.data));
  }
}
