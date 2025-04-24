import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudilingLinksComponent } from './budiling-links/budiling-links.component';
import { AduitComponent } from './aduit/aduit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainAppComponent } from './main-app/main-app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ClubComponent } from './club/club.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResidencyComponent } from './residency/residency.component';
import { StoreComponent } from './page/store/store.component';
import { CartComponent } from './page/cart/cart.component';
import { PaymentComponent } from './page/payment/payment.component';
import { DonationComponent } from './donation/donation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerLoginComponent } from './page/owner-login/owner-login.component';
import { OwnerDashboardComponent } from './page/owner-dashboard/owner-dashboard.component';
import { InventoryComponent } from './page/inventory/inventory.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';




@NgModule({
  declarations: [
    AppComponent,
    BudilingLinksComponent,
    AduitComponent,
    NavbarComponent,
    FooterComponent,
    MainAppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ClubComponent,
    LoginComponent,
    SignupComponent,
    GalleryComponent,
    ResidencyComponent,
    StoreComponent,
    CartComponent,
    PaymentComponent,
    DonationComponent,
    OwnerLoginComponent,
    OwnerDashboardComponent,
    InventoryComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    VerifyEmailComponent,
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({ projectId: "aurth-folk", appId: "1:241476533313:web:bbb073783104315f5fdac0", storageBucket: "aurth-folk.firebasestorage.app", apiKey: "AIzaSyAK4QVrH3_9O-a42YuVU3jYQnbg9UKU1SI", authDomain: "aurth-folk.firebaseapp.com", messagingSenderId: "241476533313" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
