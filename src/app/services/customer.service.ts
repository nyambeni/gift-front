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

  getCustomer(id: number){
    return {firstname: "Isaac", lastname: "Malebana", emailAddress: "isaac@gmail.com"};
  } 

  updateCustomer(customerData: any){
    const id = this.userId();
    return this.http.put(`${this.url}/${id}`, customerData);
  }

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

  deleteWish(title: any){
    return this.http.delete(this.url+"customer/deletewishlist/"+title)
  }
}
