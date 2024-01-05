import { Component } from '@angular/core';
import { CategoryManageModule } from './category-manage-module';
import { RouterLink } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DestroyService } from 'src/app/common/service/destroy.service';
import { CategoryAdminService } from '../services/category-admin-service.service';
import { Category } from './category';

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.scss'],
  standalone: true,
  imports: [CategoryManageModule, RouterLink, NzStepsModule],
  providers: [DestroyService],
})
export class CategoryManageComponent {
  public categories: Category[] = [];
  constructor(public detailCategoryService: CategoryAdminService) {}

  ngOnInit(): void {
    this.getListCategory();
  }
  getListCategory() {
    this.detailCategoryService.getListCategory().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching customers: ', error);
      }
    );
  }
}
