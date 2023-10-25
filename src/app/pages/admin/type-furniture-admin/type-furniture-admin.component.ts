import { Component, OnInit } from '@angular/core';
import { TypeFurnitureOfAdminModule } from './type-furniture-admin-module';
import { serviceManagerAdmin } from './data/data-row-1';
import { ProductAdminService } from './services/product-admin-service.service';

@Component({
  selector: 'app-type-furniture-admin',
  templateUrl: './type-furniture-admin.component.html',
  styleUrls: ['./type-furniture-admin.component.scss'],
  standalone: true,
  imports: [TypeFurnitureOfAdminModule],
})
export class TypeFurnitureOfAdminComponent implements OnInit {
  dataRow1 = serviceManagerAdmin;
  constructor(public detailFunitureService: ProductAdminService) {}

  ngOnInit() {}
}
