import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  headElements = ['Name', 'Phone Number', 'Email Address', 'Address', 'Items', 'Quantity', "Order Date"];
  totalprice: number = 0;

  constructor(private as: AdminService, private cs: CustomerService) { }

  order: any = [];
  orders: any = [];
  customer: any=[];
  custID: any;
  emailAdd: any;
  email: any;
  ngOnInit(): void {

    //Get All the Orders
    this.as.getOrder().subscribe((data: any) => {
      console.log("data");

      this.order = data;

      for (let o of this.order) {
        o.totalPrice = o.totalPrice * o.quantity;
        o.order_date = o.order_date.split("T");
        // o.streetAddress = "";
        this.custID = o.cust_id;

        //Get Customer's email
        this.cs.getCustomer(this.custID).subscribe((data: any) => {
          this.customer = data[0];
          this.email = this.customer.emailAddress;
          this.emailAdd =this.email;
          console.log(this.emailAdd);
          const datas = { cust_id: o.cust_id, firstname: o.firstname, email: this.emailAdd, item_title: o.item_title, lastname: o.lastname, order_date: o.order_date[0], order_id: o.order_id, phoneNumber: o.phoneNumber, postalCode: o.postalCode, province: o.province.toUpperCase(), quantity: o.quantity, streetAddress: o.streetAddress.toUpperCase(), totalPrice: o.totalPrice };
          this.orders.push(datas);
          this.totalprice += o.totalPrice;
        }, error => console.log(error));
        
        
      }

      for (let e of this.orders) {
        //this.totPrice = e.quantity * e.totalPrice
        
  
      }
    });

    console.log(this.orders);
  }

  //Search Order
  searchL: any = [];
  table: number = 1;
  totPrice: number = 0;
  amount: number = 0;
  name: any;
  searchName: string = "";

  onSearch(search: any) {
    this.name = search.toLowerCase();

    if (search == "") {
      alert("The is no email address entered");
    }

    for (let e of this.orders) {
      this.searchName = e.email.toLowerCase();
      if (this.searchName == this.name) {

        this.amount += e.totalPrice;
        this.searchL.push(e);

      }
    }

    //this.name = search.toLowerCase().split(" ");
    /*for (let i = 0; i < this.name.length; i++) {
      this.name[i] = this.name[i][0].toUpperCase() + this.name[i].slice(1);
    }
    this.name.join(" ");*/

    if (this.searchL == "") {

      alert(this.name + " name does not exists in the table");
      this.table = 1;
    } else {
      this.table = 2;
    }
  }

  //View All the Orders
  viewAll() {
    this.table = 1;
    this.searchL = [];
    this.amount = 0;
  }

  //Calculate the total amount for all the orders
  tP: number = 1;
  totalPrice() {
    this.tP = 2;
   
  }
}
