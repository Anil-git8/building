import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudilingLinksComponent } from './budiling-links/budiling-links.component';
import { AduitComponent } from './aduit/aduit.component';
import { MainAppComponent } from './main-app/main-app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ClubComponent } from './club/club.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ResidencyComponent } from './residency/residency.component';
import { StoreComponent } from './page/store/store.component';
import { CartComponent } from './page/cart/cart.component';
import { PaymentComponent } from './page/payment/payment.component';
import { DonationComponent } from './donation/donation.component';
import { OwnerLoginComponent } from './page/owner-login/owner-login.component';
import { OwnerDashboardComponent } from './page/owner-dashboard/owner-dashboard.component';
import { OwnerAuthGuard } from './guards/owner-auth.guard';
import { InventoryComponent } from './page/inventory/inventory.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';







const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'budiling', component: BudilingLinksComponent },
  { path:'aduit',component: AduitComponent},
  { path:'main-app',component:MainAppComponent},
  { path: 'Home', component:HomeComponent},
  { path:'contact',component:ContactComponent},
  { path: 'about',component:AboutComponent},
  { path: 'club',component:ClubComponent},
  { path: 'login',component:LoginComponent},
  { path: 'signup',component:SignupComponent},
  { path: 'gallery',component:GalleryComponent},
  { path: 'hostel',component:ResidencyComponent},
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'owner-login', component: OwnerLoginComponent },
  {
    path: 'owner-dashboard',
    component: OwnerDashboardComponent,
    canActivate: [OwnerAuthGuard]
  },
  // { path: 'owner-dashboard', component: OwnerDashboardComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'verify-mail', component: VerifyEmailComponent },
 







];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
