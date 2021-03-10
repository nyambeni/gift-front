import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  viewCustomer(){
    return this.http.get(this.url+"admin/allcustomer");
  }
  
  getOrder(){
    return this.http.get(this.url+"admin/payments");
  }

  viewBox(){
    return this.http.get(this.url+"admin/allcustomer");
  }
  
}
