import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//for wishlist
import{BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SevirceService {
  private content= new BehaviorSubject<number>(0);
  public share = this.content.asObservable();
  

  constructor(private http: HttpClient) { }

  placeOrder = 'http://168.172.189.22:5000/insert';
  orders_url = 'http://168.172.189.22:5000/allOrders';
  login_url = 'http://168.172.189.22:5000/login';
  register_url = 'http://168.172.189.22:5000/register';

updateData(numberOfLikes){
this.content.next(numberOfLikes);}

updateCart(numberOfcart){
  this.content.next(numberOfcart);
}



  
  public getOrders()
  {
     return this.http.get<any>(this.orders_url);
  }

  
  public addOrder(order)
  {
    return this.http.post<any>(this.placeOrder, order, {});
  } 

  public addRegister(register)
  {
    return this.http.post<any>(this.register_url, register, {});
  } 

  public login(login)
  {
    return this.http.get<any>(this.login_url, login);
  }

}
