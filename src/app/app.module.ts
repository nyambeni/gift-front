import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddtocartComponent } from './addtocart/addtocart.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,LandingComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    
    WishlistComponent,
    
    AddtocartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
