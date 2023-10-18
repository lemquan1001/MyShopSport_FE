import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiServerUrl = environment.server;

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiServerUrl}productT/getAllProducts`
    );
  }

  // public getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(
  //     `http://localhost:8080/api/productT/getAllProducts`
  //   );
  // }
}
