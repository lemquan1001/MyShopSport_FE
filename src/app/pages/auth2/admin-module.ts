import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ShowErrorComponent } from 'src/app/common/show-error/show-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ResizeColumnDirective } from 'src/app/common/directives/resize-column.directive';
import { HttpClientModule } from '@angular/common/http';
import { SignupAdmin2Component } from './signup-admin/signup-admin.component';

export const AdminModule = [
  RouterModule,
  CommonModule,
  NzIconModule,
  NzSpinModule,
  NzAlertModule,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzTableModule,
  ShowErrorComponent,
  FormsModule,
  ReactiveFormsModule,
  NzNotificationModule,
  ResizeColumnDirective,
  HttpClientModule,
  SignupAdmin2Component,
];
