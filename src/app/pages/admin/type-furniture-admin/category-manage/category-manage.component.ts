import { Component } from '@angular/core';
import { CategoryManageModule } from './category-manage-module';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.scss'],
  standalone: true,
  imports: [CategoryManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class CategoryManageComponent {

}
