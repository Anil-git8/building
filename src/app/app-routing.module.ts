import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudilingLinksComponent } from './budiling-links/budiling-links.component';
import { AduitComponent } from './aduit/aduit.component';
import { MainAppComponent } from './main-app/main-app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { FOLKstoreComponent } from './folkstore/folkstore.component';
import { AshrayaComponent } from './ashraya/ashraya.component';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'budiling', component: BudilingLinksComponent },
  { path: 'aduit', component: AduitComponent },
  { path: 'main-app', component: MainAppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'folkstore', component: FOLKstoreComponent },
  { path: 'ashraya', component: AshrayaComponent },
  { path: 'request', component: RequestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
