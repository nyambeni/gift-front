import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddtocartComponent} from './addtocart/addtocart.component';
import { SpepperComponent } from './spepper/spepper.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { BabyShawerComponent } from './baby-shawer/baby-shawer.component';
import { ChristmasComponent } from './christmas/christmas.component';
import { GraduationComponent } from './graduation/graduation.component';
import { WeddingComponent } from './wedding/wedding.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  {path:'',redirectTo: 'Landing',pathMatch: 'full'},
  {path:'Landing',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'order',component:OrderComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'addtocart',component:AddtocartComponent},
  {path:'spepper',component:SpepperComponent},
  {path:'placeOrder',component:PlaceOrderComponent},
  {path:'footer',component:FooterComponent},
  {path:'product',component:ProductComponent},
  {path:'babyShawer',component:BabyShawerComponent},
  {path:'christmas',component:ChristmasComponent},
  {path:'graduation',component:GraduationComponent},
  {path:'wedding',component:WeddingComponent},
  {path:'birthdays',component:BirthdaysComponent},
  {path:'adminDashbord',component:AdminDashboardComponent}
  
  
]
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
