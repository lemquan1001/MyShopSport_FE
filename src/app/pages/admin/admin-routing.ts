import { ProductManageComponent } from './product-manage/product-manage.component';
import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
export const route: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ProductManageComponent,
      },
      {
        path: 'quan',
        component: HeaderAdminComponent,
      },
    ],
  },
];
