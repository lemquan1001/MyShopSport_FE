import { ResizeColumnDirective } from '../../../../common/directives/resize-column.directive';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductManageComponent } from './product-manage.component';
export const ProductManageModule = [
  CommonModule,
  NzTableModule,
  ResizeColumnDirective,
  HttpClientModule,
  FormsModule,
  ProductManageComponent,
];
