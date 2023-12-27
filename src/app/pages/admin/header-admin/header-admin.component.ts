import { Component, OnInit } from '@angular/core';
import { HeaderAdminModule } from './header-admin-module';
import { Router } from '@angular/router';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { FormsModule } from '@angular/forms';
import { AuthAdminService } from '../auth/service/auth-admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
  standalone: true,
  imports: [HeaderAdminModule, NzBadgeModule, FormsModule],
})
export class HeaderAdminComponent implements OnInit {
  constructor(
    private router: Router,
    public newFunitureService: AuthAdminService,
    public http: HttpClient
  ) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['/admin/login']);
  }
}
