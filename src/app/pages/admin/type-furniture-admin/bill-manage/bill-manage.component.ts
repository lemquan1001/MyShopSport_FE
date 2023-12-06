import { Component } from '@angular/core';
import { BillManageModule } from './bill-manage-module';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';

@Component({
  selector: 'app-bill-manage',
  templateUrl: './bill-manage.component.html',
  styleUrls: ['./bill-manage.component.scss'],
  standalone: true,
  imports: [BillManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class BillManageComponent {

}
