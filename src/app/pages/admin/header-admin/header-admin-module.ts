import { ResizeColumnDirective } from './../../../common/directives/resize-column.directive';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
export const HeaderAdminModule = [
  CommonModule,
  NzTableModule,
  ResizeColumnDirective,
  NzGridModule,
  NzInputModule,
  NzIconModule,
  NzButtonModule,
  NzBadgeModule,
];
