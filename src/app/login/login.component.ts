import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (email === 'test@example.com' && password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/store']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }

  onReset() {
    this.loginForm.reset();
    this.errorMessage = '';
  }
}
