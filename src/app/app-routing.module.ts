import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftBoxFormComponent } from './components/gift-box-form/gift-box-form.component';
import { StatisticBoxComponent } from './components/statistic-box/statistic-box.component'
import { LandingComponent } from './components/landing/landing.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import { ShoplandingComponent } from './components/shoplanding/shoplanding.component';
import { ViewBoxComponent } from './components/view-box/view-box.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'giftboxform', component: GiftBoxFormComponent },
  { path: 'statisticbox', component: StatisticBoxComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'shop', component: ShoplandingComponent },
  { path: 'viewbox', component: ViewBoxComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wishlist', component: WishListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
