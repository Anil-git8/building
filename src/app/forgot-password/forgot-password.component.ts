import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(private auth : AuthService) { }
  ngOnInit(): void { 

  }


forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }


  
}
