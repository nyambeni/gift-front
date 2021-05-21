import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 //url = "http://10.100.14.17:3000/";
  url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  viewCustomer(){
    return this.http.get(this.url+"admin/allcustomer");
  }
  
  getOrder(){
    return this.http.get(this.url+"admin/payments");
  }

  getOrderById(id: any){
    return this.http.get(this.url+"admin/payment" + id);
  }
/*
  viewBox(){
    return this.http.get(this.url+"admin/allcustomer");
  }*/
  
  sendGiftBox(boxData: any ){
    return this.http.post(this.url+"admin/uploadItem", boxData);
  }

  deleteGiftBox(boxID:any){
    return this.http.delete(this.url+"admin/deleteItems/"+boxID)
  }

  adminLogin(adminData: any){
    return this.http.post(this.url+"login/admin", adminData);
  }

  viewItems(){
    return this.http.get(this.url+"admin/viewItems");
  }

  updateItem(itemData:any, id:number){
    return this.http.put(this.url+"admin/update/items/"+id, itemData);
  }
  
  customerMonthlyReport(month: any){
    return this.http.get(this.url+"admin/customer/"+month);
  }

  orderMonthlyReport(month: any){
    return this.http.get(this.url+"admin/order/"+month);
  }
}
