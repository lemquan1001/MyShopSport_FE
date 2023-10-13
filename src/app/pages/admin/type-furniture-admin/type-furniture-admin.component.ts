import { Component, OnInit } from '@angular/core';
import { TypeFurnitureOfAdminModule } from './type-furniture-admin-module';

@Component({
  selector: 'app-type-furniture-admin',
  templateUrl: './type-furniture-admin.component.html',
  styleUrls: ['./type-furniture-admin.component.scss'],
  standalone: true,
  imports: [TypeFurnitureOfAdminModule],
})
export class TypeFurnitureOfAdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
