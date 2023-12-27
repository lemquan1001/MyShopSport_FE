import { ProductManageComponent } from './type-furniture-admin/product-manage/product-manage.component';
import { AdminComponent } from './admin.component';
import { Route, Routes } from '@angular/router';
import { SelectSizeComponent } from '../user/landing-page/type-furniture/select-size/select-size.component';
import { BillManageComponent } from './type-furniture-admin/bill-manage/bill-manage.component';
import { CategoryManageComponent } from './type-furniture-admin/category-manage/category-manage.component';
import { DetailProductManageComponent } from './type-furniture-admin/detail-product-manage/detail-product-manage.component';
import { ManageCustomerComponent } from './type-furniture-admin/manage-customer/manage-customer.component';
import { LoginAdminComponent } from './auth/login-admin/login-admin.component';
import { SignupAdminComponent } from './auth/signup-admin/signup-admin.component';

export const route: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'product-manage',
        component: ProductManageComponent,
      },
      {
        path: 'order-manage',
        component: BillManageComponent,
      },
      {
        path: 'categoty-manage',
        component: CategoryManageComponent,
      },
      {
        path: 'productDetail-manage',
        component: DetailProductManageComponent,
      },
      {
        path: 'customer-manage',
        component: ManageCustomerComponent,
      },
      {
        path: 'login',
        component: LoginAdminComponent,
      },
      {
        path: 'signup',
        component: SignupAdminComponent,
      },
    ],
  },
];
