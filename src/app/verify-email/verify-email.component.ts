import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],

  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]

})
export class VerifyEmailComponent {
  userEmail: string | null = null;
user: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.currentUser.then(user => {
      this.userEmail = user?.email ?? null;
      this.user = user;
    });
  }

  resendEmail() {
    this.afAuth.currentUser.then(user => {
      if (user) {
        user.reload().then(() => { // <- Refresh user data
          if (!user.emailVerified) {
            user.sendEmailVerification().then(() => {
              alert('Verification email sent again! Please check your inbox.');
            }).catch(err => {
              alert('Verification mail already sent! Please check your inbox.');
              console.error(err);
            });
          } else {
            alert('Your email is already verified.');
          }
        });
      }
    });
  }
  

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
