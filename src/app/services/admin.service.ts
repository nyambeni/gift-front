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
/*
  viewBox(){
    return this.http.get(this.url+"admin/allcustomer");
  }*/
  
  sendGiftBox(boxData: any ){
    return this.http.post(this.url+"admin/upload", boxData);
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
  
}
