import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAdminService } from './auth2/auth-admin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authAdminService: AuthAdminService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authAdminService.isAuthenticated()) {
      // Kiểm tra điều kiện xác thực, có thể thực hiện kiểm tra enable = 1 tại đây
      return true;
    } else {
      // Nếu không xác thực, chuyển hướng đến trang /admin2
      this.router.navigate(['/admin2']);
      return false;
    }
  }
}
