import { Component, OnInit } from '@angular/core';
import { ProductManageModule } from './product-manage-module';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseAPINoContent } from 'src/app/common/types/response-api';
import { CardItem } from 'src/app/pages/user/landing-page/type-furniture/new-funiture/types/card-item';
import { DetailProductServiceService } from 'src/app/pages/user/landing-page/type-furniture/new-funiture/services/detail-product-service.service';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss'],
  standalone: true,
  imports: [ProductManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class ProductManageComponent {
  constructor(
    private http: HttpClient,

    public detailFunitureService: DetailProductServiceService
  ) {}

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct() {
    return this.http
      .get<ResponseAPINoContent<CardItem[]>>(
        'http://localhost:8080/api/productT/getAllProducts'
      )
      .subscribe((res) => {
        {
          if (res) {
            if (this.detailFunitureService.isProductsByCategory.value) {
              this.detailFunitureService.listDataCard.value;
            } else {
              this.detailFunitureService.listDataCard.next(res.data);
            }
          }
        }
      });
  }
}
