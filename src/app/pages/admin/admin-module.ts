import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TypeFurnitureComponent } from '../user/landing-page/type-furniture/type-furniture.component';
import { FooterComponent } from '../user/landing-page/footer/footer.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { TypeFurnitureOfAdminComponent } from './type-furniture-admin/type-furniture-admin.component';
export const AdminModule = [
  HeaderAdminComponent,
  FooterAdminComponent,
  RouterModule,
  CommonModule,
  NzIconModule,
  TypeFurnitureComponent,
  TypeFurnitureOfAdminComponent,
  FooterComponent,
  NzSpinModule,
  NzAlertModule,
  NzButtonModule,
];
