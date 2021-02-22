import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LandingComponent } from './components/landing/landing.component';
import { GiftBoxFormComponent } from './components/gift-box-form/gift-box-form.component';
import { StatisticBoxComponent } from './components/statistic-box/statistic-box.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ShoplandingComponent } from './components/shoplanding/shoplanding.component';
import { ViewBoxComponent } from './components/view-box/view-box.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProfileComponent } from './components/profile/profile.component';

import { HttpClientModule } from  '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GiftBoxFormComponent,
    StatisticBoxComponent,
    AboutusComponent,
    ShoplandingComponent,
    ViewBoxComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    WishListComponent,
    CheckoutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ], 
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
