import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //url = "http://10.100.14.17:3000/";
  url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  addCustomer(customerData: any) {
    return this.http.post(this.url + "register/register", customerData);
  }

  getCustomer(id: any) {
    // return {firstname: "Isaac", lastname: "Malebana", emailAddress: "isaac@gmail.com"};
    return this.http.get(this.url + "customer/profile/" + id);
  }

  updateCustomer(customerData: any) {
    const id = this.userId();
    return this.http.put(this.url + "customer/profile/update/" + id, customerData);
  }

  ///profile/update/

  deleteUser(id: any) {
    return this.http.delete(this.url + "customer/delete/" + id)
  }

  logIn(customerData: any) {
    return this.http.post(this.url + "login/customer", customerData);
  }

  userId() {
    return Number(localStorage.getItem('id'));
  }

  addwishlist(customerData: any) {
    return this.http.post(this.url + "customer/addwishlist", customerData);
  }

  viewWishList(id: any) {
    return this.http.get(this.url + "customer/viewWishlist/" + id)
  }

  deleteWish(id: any) {
    return this.http.delete(this.url + "customer/deletewishlist/" + id)
  }

  getItemsByCate(category: any) {
    return this.http.get(this.url + "customer/viewWishlist/" + category)
  }

  updateItemQuantity(details:any) {
    console.log(details.item_id);
    console.log(details);
    return this.http.put(this.url + "customer/updates/" + details.item_id, details);
  }

  addToCart(item:any){
    return this.http.post(this.url + "customer/addcart/", item)
  }

  viewCart(id: any){
    return this.http.get(this.url + "customer/viewcart/" + id)
  }

  deleteFromCart(id:any){
    return this.http.delete(this.url + "customer/deletecart/" + id)
  }
}
