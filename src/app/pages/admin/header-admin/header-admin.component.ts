import { Component, OnInit } from '@angular/core';
import { HeaderAdminModule } from './header-admin-module';
import { Router, RouterLink } from '@angular/router';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { FormsModule } from '@angular/forms';
import { AuthAdminService } from '../auth/service/auth-admin.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
  standalone: true,
  imports: [HeaderAdminModule, RouterLink, NzStepsModule],
})
export class HeaderAdminComponent implements OnInit {
  constructor(
    private router: Router,
    public newFunitureService: AuthAdminService,
    public http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['/admin/login']);
  }

  logout() {
    this.router.navigate(['/admin2']);
    // Call the logout method from AuthAdminService
    this.newFunitureService.logout();

    window.location.reload();
  }

  openPasswordRecoveryModal() {
    const dialogRef = this.dialog.open(AuthAdminService, {
      width: '400px', // You can adjust the width and other options
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        // Handle the result when the modal is closed
        console.log('Modal closed with result:', result);
      },
      (reason) => {
        // Handle the reason when the modal is dismissed
        console.log('Modal dismissed with reason:', reason);
      }
    );
  }

  openModalChangePass() {
    this.router.navigate(['/admin/changePass']);
  }
}
