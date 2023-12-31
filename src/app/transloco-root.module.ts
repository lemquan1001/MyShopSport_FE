import { HttpClient } from '@angular/common/http';
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';
import { Injectable, isDevMode, NgModule } from '@angular/core';
import { CartComponent } from './pages/user/landing-page/type-furniture/cart/cart.component';
import { PaymentComponent } from './pages/user/landing-page/type-furniture/payment/payment.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ContactComponent } from './pages/user/landing-page/type-furniture/contact/contact.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SelectSizeComponent } from './pages/user/landing-page/type-furniture/select-size/select-size.component';
import { PrivacyPolicyComponent } from './pages/user/landing-page/type-furniture/privacy-policy/privacy-policy.component';
import { IntroduceComponent } from './pages/user/landing-page/type-furniture/introduce/introduce.component';
import { BillManageComponent } from './pages/admin/type-furniture-admin/bill-manage/bill-manage.component';
import { CategoryManageComponent } from './pages/admin/type-furniture-admin/category-manage/category-manage.component';
import { DetailProductManageComponent } from './pages/admin/type-furniture-admin/detail-product-manage/detail-product-manage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'vi'],
        defaultLang: 'vi',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
  imports: [
    NzCollapseModule,
    NzIconModule,
    NgxPaginationModule,
    MatDialogModule,
  ],
  declarations: [],
})
export class TranslocoRootModule {}
