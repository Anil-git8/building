import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OwnerAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isOwnerLoggedIn') === 'true';
    if (!isLoggedIn) {
      this.router.navigate(['/owner-login']);
      return false;
    }
    return true;
  }
}
