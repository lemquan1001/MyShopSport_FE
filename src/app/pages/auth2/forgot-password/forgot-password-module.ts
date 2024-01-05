import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ResizeColumnDirective } from 'src/app/common/directives/resize-column.directive';
import { ShowErrorComponent } from 'src/app/common/show-error/show-error.component';

export const ForgotPasswordModule = [
  CommonModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzTableModule,
  ShowErrorComponent,
  NzIconModule,
  FormsModule,
  ReactiveFormsModule,
  NzNotificationModule,
  ResizeColumnDirective,
  HttpClientModule,
];
