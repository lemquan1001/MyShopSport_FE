import { Route } from '@angular/router';
import { Auth2Component } from './auth2.component';
import { SignupAdmin2Component } from './signup-admin/signup-admin.component';
import { RoleManageComponent } from './role-manage/role-manage.component';

export const route2: Route[] = [
  {
    path: '',
    component: Auth2Component,
    children: [
      {
        path: 'register',
        component: SignupAdmin2Component,
      },
      {
        path: 'role-admin',
        component: RoleManageComponent,
      },
    ],
  },
];
