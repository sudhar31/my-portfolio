import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component:ContactComponent},
  { path: '', component: NavbarComponent},
  { path: 'home', component: HomeComponent },
  { path: 'overview', component:OverviewComponent},
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
