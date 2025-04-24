import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  mobile = '';
  email = '';
  password = '';
  confirmPassword = '';
  role = '';

  constructor(private auth: AuthService, private firestore: AngularFirestore) {}

  signup() {
    if (!this.email || !this.password || !this.confirmPassword) {
      alert('Please fill all required fields');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    this.auth.signup(this.email, this.password)
      .then((userCredential: firebase.auth.UserCredential) => {
        const userId = userCredential.user?.uid;

        // Store additional user details in Firestore
        this.firestore.collection('users').doc(userId).set({
          firstName: this.firstName,
          lastName: this.lastName,
          mobile: this.mobile,
          email: this.email,
          role: this.role
        }).then(() => {
          alert('Signup successful!');
          this.clearForm();
        });
      })
      .catch((err: { message: string }) => {
        console.error(err);
        alert("Signup successful!");
        this.clearForm();
      });
  }

  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.mobile = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.role = '';
  }
}
