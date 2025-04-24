import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { Router } from '@angular/router';
 import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
 
  
  constructor(private auth: AuthService, private fireauth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}
  
  login() {
    if (this.email === '' || this.password === '') {
      alert('Please fill all the fields');
      return;
    }
  
    this.auth.login(this.email, this.password)
      .then(() => {
        this.email = '';
        this.password = '';
      })
      
  }



  signInWithGoogle(event: Event) {
    event.preventDefault(); // ✅ Prevent default anchor action

    this.fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        if (res.user) {
          localStorage.setItem('token', res.user.uid);
          alert('Login successful!');
          this.router.navigate(['/store']);
        }
      })
      .catch((err) => {
        console.error('Google sign-in error:', err);
        alert('Google sign-in failed. Please try again.');
      });
  }


}














  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //   });
  // }

  

  // onSubmit() {
  //   const { email, password } = this.loginForm.value;

  //   if (email === 'test@example.com' && password === '123456') {
  //     localStorage.setItem('isLoggedIn', 'true');
  //     this.router.navigate(['/store']);
  //   } else {
  //     this.errorMessage = 'Invalid email or password.';
  //   }
  // }

  // onReset() {
  //   this.loginForm.reset();
  //   this.errorMessage = '';
  // }

  // signInWithGoogle() {
  //   this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //     .then((result) => {
  //       localStorage.setItem('isLoggedIn', 'true');
  //       this.router.navigate(['/store']);
  //     })
  //     .catch((error) => {
  //       this.errorMessage = error.message;
  //     });
  // }


  
