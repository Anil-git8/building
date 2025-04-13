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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
