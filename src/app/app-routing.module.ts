import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftBoxFormComponent } from './components/gift-box-form/gift-box-form.component';
import { StatisticBoxComponent } from './components/statistic-box/statistic-box.component'
import { LandingComponent } from './components/landing/landing.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ShoplandingComponent } from './components/shoplanding/shoplanding.component';
import { ContactComponent } from './components/contact/contact.component';
import { ViewBoxComponent } from './components/view-box/view-box.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'giftboxform', component: GiftBoxFormComponent },
  { path: 'statisticbox', component: StatisticBoxComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'shop', component: ShoplandingComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'viewbox', component: ViewBoxComponent },


  { path: 'admin', component: AdminDashboardComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: ProfileComponent },


  { path: 'admindashboard', component: AdminDashboardComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'wish', component: WishlistComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
