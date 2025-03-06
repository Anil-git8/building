import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudilingLinksComponent } from './budiling-links/budiling-links.component';
import { AduitComponent } from './aduit/aduit.component';
import { MainAppComponent } from './main-app/main-app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ClubComponent } from './club/club.component';




const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'budiling', component: BudilingLinksComponent },
  { path:'aduit',component: AduitComponent},
  { path:'main-app',component:MainAppComponent},
  { path: 'Home', component:HomeComponent},
  { path:'contact',component:ContactComponent},
  { path: 'about',component:AboutComponent},
  { path: 'club',component:ClubComponent},
  


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
