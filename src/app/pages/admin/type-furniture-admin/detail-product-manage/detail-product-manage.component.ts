import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';

@Component({
  selector: 'app-detail-product-manage',
  templateUrl: './detail-product-manage.component.html',
  styleUrls: ['./detail-product-manage.component.scss'],
  standalone: true,
  imports: [DetailProductManageComponent, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class DetailProductManageComponent {

}
