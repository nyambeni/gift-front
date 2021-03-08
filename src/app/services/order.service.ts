import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

 
  url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  sendOrder(orderData: any ){
    return this.http.post(this.url+"customer/order", orderData);
  }
}
