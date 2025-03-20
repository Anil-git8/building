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
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
