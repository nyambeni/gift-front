import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LandingComponent } from './components/landing/landing.component';
import { GiftBoxFormComponent } from './components/gift-box-form/gift-box-form.component';
import { StatisticBoxComponent } from './components/statistic-box/statistic-box.component';
import { ShoplandingComponent } from './components/shoplanding/shoplanding.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewBoxComponent } from './components/view-box/view-box.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule} from  '@angular/common/http';

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import { ViewcustomerComponent } from './components/viewcustomer/viewcustomer.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ReportComponent } from './components/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GiftBoxFormComponent,
    StatisticBoxComponent,
    AboutusComponent,
    ShoplandingComponent,
    ContactComponent,
    AdminDashboardComponent,
    RegisterComponent,
    ViewBoxComponent,
    LoginComponent,
    WishlistComponent,
    CheckoutComponent,
    ProfileComponent,
    OrderComponent,
    PaymentComponent,
    PageNotFoundComponent,
    ViewcustomerComponent,
    AdminloginComponent,
    ReportComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
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
