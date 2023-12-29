import { Route } from '@angular/router';
import { Auth2Component } from './auth2.component';
import { SignupAdmin2Component } from './signup-admin/signup-admin.component';

export const route2: Route[] = [
  {
    path: '',
    component: Auth2Component,
    children: [
      {
        path: 'register',
        component: SignupAdmin2Component,
      },
    ],
  },
];
