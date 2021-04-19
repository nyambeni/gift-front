import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

 
 // url = "http://10.100.14.17:3000/";
  url = "http://localhost:3000/"; 

  constructor(private http: HttpClient) { }

  sendOrder(orderData: any ){
    return this.http.post(this.url+"customer/order", orderData);
  }

  updateItem(quantity: any, title: any){
    const item ={
      qty: quantity,
      title
    };
    return this.http.post(this.url+"customer/updates/item", item);
  }
}
