import { Component, OnInit } from '@angular/core';
import { FooterAdminModule } from './footer-admin-module';

@Component({
  selector: 'app-footer-admin',
  templateUrl: './footer-admin.component.html',
  styleUrls: ['./footer-admin.component.scss'],
  standalone: true,
  imports: [FooterAdminModule],
})
export class FooterAdminComponent implements OnInit {
  onstructor() {}

  ngOnInit() {}
}
