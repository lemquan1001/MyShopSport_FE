import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { BrandManageModule } from './brand-manage-module';

@Component({
  selector: 'app-brand-manage',
  templateUrl: './brand-manage.component.html',
  styleUrls: ['./brand-manage.component.scss'],
  standalone: true,
  imports: [BrandManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class BrandManageComponent {}
