import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddtocartComponent} from './addtocart/addtocart.component';




const routes: Routes = [
  {path:'',redirectTo: 'Landing',pathMatch: 'full'},
  {path:'Landing',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'order',component:OrderComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'addtocart',component:AddtocartComponent}
  
]
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
