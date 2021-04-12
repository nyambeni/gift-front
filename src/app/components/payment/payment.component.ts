import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  headElements = ['Name', 'Last Name', 'Phone Number', 'Address', 'Items', 'Quantity', "Order Date"];
  totalprice: number = 0;

  constructor(private as: AdminService) { }

  order: any = [];
  orders: any = [];
  ngOnInit(): void {

    //Get All the Orders
    this.as.getOrder().subscribe(data => {
      console.log(data);

      this.order = data;

      for (let o of this.order) {
        o.totalPrice= o.totalPrice * o.quantity;
        o.order_date = o.order_date.split("T");
        o.streetAddress = "";
        this.orders.push(o);
      }
    });

    console.log(this.orders);
  }

  //Search Order
  searchL: any = [];
  table: number = 1;
  totPrice:number=0;
  amount: number = 0;
  name: any;
  searchName: string = "";

  onSearch(search: any) {
    this.name = search.toLowerCase();

    if (search == "") {
      alert("The is no name entered");
    }

    for (let e of this.orders) {
      this.searchName = e.firstname.toLowerCase();
      if (this.searchName == this.name) {
       
        this.amount += e.totalPrice;
        this.searchL.push(e);
      
      }
    }

    this.name = search.toLowerCase().split(" ");
    for (let i = 0; i < this.name.length; i++) {
      this.name[i] = this.name[i][0].toUpperCase() + this.name[i].slice(1);
    }
    this.name.join(" ");

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
    for (let e of this.orders) {
      this.totPrice = e.quantity*e.totalPrice
      this.totalprice = this.totalprice + this.totPrice;

    }
  }
}
