import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { SignupPagesComponent } from './pages/signup-pages/signup-pages.component';
import { SingleComponent } from './pages/single/single.component';
import { DistrictComponent } from './pages/district/district.component';

const routes: Routes = [
  {
    path:'',
    component:HomepagesComponent
  },
  {
    path:'contactpages',
    component:ContactpagesComponent
  },
  {
    path:'district',
    component:DistrictComponent
  },
  {
    path:'signup-pages',
    component:SignupPagesComponent
  },
  {
    path:'single',
    component:SingleComponent
  },




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
