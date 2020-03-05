import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { SpepperComponent } from './spepper/spepper.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ChristmasComponent } from './christmas/christmas.component';
import { GraduationComponent } from './graduation/graduation.component';
import { BabyShawerComponent } from './baby-shawer/baby-shawer.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,LandingComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    
    WishlistComponent,
    
    AddtocartComponent,
    
    SpepperComponent,
    
    PlaceOrderComponent,
    
    FooterComponent,
    
    ProductComponent,
    
    WeddingComponent,
    
    ChristmasComponent,
    
    GraduationComponent,
    
    BabyShawerComponent,
    
    BirthdaysComponent,
    
    AdminDashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
