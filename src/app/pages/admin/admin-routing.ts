import { ProductManageComponent } from './type-furniture-admin/product-manage/product-manage.component';
import { AdminComponent } from './admin.component';
import { Route, Routes } from '@angular/router';
import { SelectSizeComponent } from '../user/landing-page/type-furniture/select-size/select-size.component';
export const route: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'pmcquan',
        component: ProductManageComponent,
      },
    ],
  },
];
