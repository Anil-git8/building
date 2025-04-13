import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-login',
  standalone: false,
  templateUrl: './owner-login.component.html',
  styleUrl: './owner-login.component.css'
})
export class OwnerLoginComponent {
  username = '';
  password = '';
  loginFailed = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isOwnerLoggedIn', 'true');
      this.router.navigate(['/owner-dashboard']);
    } else {
      this.loginFailed = true;
    }
  }

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isOwnerLoggedIn') === 'true';
    if (isLoggedIn) {
      this.router.navigate(['/owner-dashboard']);
    }
  }
  
}
