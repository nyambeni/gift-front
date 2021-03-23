import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  addCustomer(customerData: any ){
    return this.http.post(this.url+"register/register", customerData);
  }

  getCustomer(id: any){
   // return {firstname: "Isaac", lastname: "Malebana", emailAddress: "isaac@gmail.com"};
    return this.http.get(this.url+"customer/profile/"+id);
  } 

  updateCustomer(customerData: any){
    const id = this.userId();
    return this.http.put(this.url+"customer/profile/update/"+id, customerData);
  }

  ///profile/update/

  deleteUser(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  logIn(customerData: any){
    return this.http.post(this.url+"login/customer", customerData);
  }

  userId(){
    return Number(localStorage.getItem('id'));
  }

  addwishlist(customerData: any ){
    return this.http.post(this.url+"customer/addwishlist", customerData);
  }
  
  viewWishList(id: any){
    return this.http.get(this.url+"customer/viewWishlist/"+id)
  }

  deleteWish(id: any){
    return this.http.delete(this.url+"customer/deletewishlist/"+id)
  }

  getItemsByCate(category: any){
    return this.http.get(this.url+"customer/viewWishlist/"+category)
  }
  
}
