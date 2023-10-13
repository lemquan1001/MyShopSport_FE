import { Component, OnInit } from '@angular/core';
import { HeaderAdminModule } from './header-admin-module';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
  standalone: true,
  imports: [HeaderAdminModule],
})
export class HeaderAdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
