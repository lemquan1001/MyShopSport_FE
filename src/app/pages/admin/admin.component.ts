import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { TypeFurnitureOfAdminComponent } from './type-furniture-admin/type-furniture-admin.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
  // imports: [CommonModule, RouterModule]
  imports: [
    HeaderAdminComponent,
    FooterAdminComponent,
    TypeFurnitureOfAdminComponent,
  ],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
