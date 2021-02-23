import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "http://10.100.14.52:3000";

  constructor(private http: HttpClient) { }

  //register a user 
  addCustomer(customerData: any ){
    return this.http.post(`${this.url}/register/register`, customerData);
  }

  getCustomer(id: number){
    console.log(`Customer get API
    ${id}
    ----------------------
    `)
    return {firstname: "Isaac", lastname: "Malebana", emailAddress: "isaac@gmail.com"};
  } 

  updateCustomer(customerData: any){
    const id = 1; // this.userId();
    console.log( 
    customerData
    )

    return this.http.put(`${this.url}/${id}`, customerData);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  //have to set this on register and login and remove it on log-out
  userId(){
    return Number(localStorage.getItem('id'));
  }

  logIn(userData: any){
    return this.http.post(`${this.url}/login/customer`, userData);
  }
}
