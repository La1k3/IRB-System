import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'] as 'user' | 'admin';
    const userRole = this.authService.getUserRole();

    if (!this.authService.isAuthenticated() || userRole !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
