import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ResizeColumnDirective } from 'src/app/common/directives/resize-column.directive';

export const ChangePassModule = [
  CommonModule,
  NzTableModule,
  ResizeColumnDirective,
  NzGridModule,
  NzInputModule,
  NzIconModule,
  NzButtonModule,
  NzBadgeModule,
  FormsModule,
];
