import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product-manage/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductAdminService {
  isProductsByCategory = new BehaviorSubject(false);
  listProduct = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      // 'http://localhost:8080/api/productT/addProductT',
      `http://localhost:8080/api/productT/addProductT`,
      product
    );
  }
}
