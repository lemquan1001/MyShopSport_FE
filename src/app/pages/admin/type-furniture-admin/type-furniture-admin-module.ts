import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

export const TypeFurnitureOfAdminModule = [
  CommonModule,
  NzPopoverModule,
  RouterModule,
  HttpClientModule,
];
