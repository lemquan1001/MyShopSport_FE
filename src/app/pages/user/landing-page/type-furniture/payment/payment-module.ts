import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzNotificationModule} from "ng-zorro-antd/notification";
export const PaymentModule = [
  CommonModule,
  NzInputModule,
  NzIconModule,
  NzCollapseModule,
  NzNotificationModule,
  NzButtonModule,
  NzAlertModule,
]
