import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  elements: any = [
    { name: "Loy", email: "netsh@gmail.com", number: "0785213265", address: "1308 Block L", id: 'Merry Merry', quantity: 3, tAmount: 150.00, char: 1 },
    { name: "Loy", email: "netsh@gmail.com", number: "0785213265", address: "1308 Block L", id: 'Pink Happiness', quantity: 1, tAmount: 100.00 },
    { name: "Monica", email: "geller@Yahoo.com", number: "0812023654", address: "1308 Block H", id: 'Pink Happiness', quantity: 1, tAmount: 100.00 },
    { name: "Chantelle", email: "mabena@gmail.com", number: "0852136547", address: "1308 Block FF", id: 'Merry Merry', quantity: 2, tAmount: 100.00 },
  ]


  headElements = ['Name', 'Last Name', 'Phone Number', 'Address', 'Items', 'Quantity', "Order Date"];
  totalprice: number = 0;

  constructor(private as: AdminService) { }

  order: any = [];
  orders: any = [];
  ngOnInit(): void {

    this.as.getOrder().subscribe(data => {
      console.log(data);

      this.order = data;

      for (let o of this.order) {
        o.order_date=o.order_date.split("T");
        this.orders.push(o);
      }
    });

    console.log(this.orders);
  }

  searchL: any = [];
  table: number = 1;
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
        this.searchL.push(e);
        this.amount += e.totalPrice;
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
  viewAll() {
    this.table = 1;
    this.searchL = [];
    this.amount = 0;
  }

  tP: number = 1;
  totalPrice() {
    this.tP = 2;
    for (let e of this.orders) {
      this.totalprice = this.totalprice + e.totalPrice;
      
    }
  }
}
