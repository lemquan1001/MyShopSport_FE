import { Component, OnInit } from '@angular/core';
import { ProductManageModule } from './product-manage-module';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { Product } from './product';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss'],
  standalone: true,
  imports: [ProductManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class ProductManageComponent {
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products;
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (reponse: Product[]) => {
        this.products = reponse;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
