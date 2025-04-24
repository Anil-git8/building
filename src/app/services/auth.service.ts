import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import {GoogleAuthProvider, GithubAuthProvider,FacebookAuthProvider} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    return this.fireauth.signInWithEmailAndPassword(email, password)
      .then(res  => {
        localStorage.setItem('token', 'true');
        

if(res.user?.emailVerified == true){
  this.router.navigate(['/store']);
  alert("Login Successful");
}else{
  this.router.navigate(['/verify-mail']);
  alert("Please verify your email before logging in.");
  this.sendEmailForVerification(res.user);
}

      })
      .catch(err => {
        alert("Could not log in. Please check your credentials.");
        console.error(err);
        this.router.navigate(['/login']);
      });
  }

  signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.sendEmailForVerification(res.user);
        return res;
      });
  }

  logout() {
    return this.fireauth.signOut()
      .then(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
        alert("Logout Successful");
      })
      .catch(err => {
        alert(err.messages);
      });
  }



  forgotPassword(email: string): Promise<void> {
    return this.fireauth.sendPasswordResetEmail(email)
      .then(() => {
        alert('Password reset email sent!');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        if (err.code === 'auth/user-not-found') {
          alert('Email not found in our database. Please check and try again.');
        } else if (err.code === 'auth/invalid-email') {
          alert('The email address is invalid. Please enter a valid email.');
        } else {
          alert('Something went wrong. Please try again later.');
          console.error(err);
        }
      });
  }
  



sendEmailForVerification(user: any) {
 user.sendEmailVerification().then((res: any) => {
    alert('Verification email sent. Please check your inbox.');
    this.router.navigate(['/verify-mail']);
 }, (err: any) => {
    alert('Something went wrong. Please try again later.');
 })
}


googleSignIn(){
  return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
    
    this.router.navigate(['/store']);
    localStorage.setItem('token', JSON.stringify(res.user?.uid));
    alert("Login Successful");
  },err => {
    alert("Could not log in. Please check your credentials.");
    console.error(err);
  })
}


}
