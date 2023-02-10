import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { SignupPagesComponent } from './pages/signup-pages/signup-pages.component';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { FooterComponent } from './unit/footer/footer.component';
import { SingleComponent } from './pages/single/single.component';
import { DistrictComponent } from './pages/district/district.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepagesComponent,
    ContactpagesComponent,
    SignupPagesComponent,
    DistrictComponent,
    NavbarComponent,
    FooterComponent,
    SingleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
