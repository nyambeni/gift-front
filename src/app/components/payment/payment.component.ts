import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  elements: any = [
    {name: "Loy", email: "netsh@gmail.com", number: "0785213265", address: "1308 Block L", id: 'Merry Merry', quantity: 3, tAmount: 150.00},
    {name: "Monica", email: "geller@Yahoo.com", number: "0812023654", address: "1308 Block H", id: 'Pink Happines', quantity: 1, tAmount: 100.00},
    {name: "Chantelle", email: "mabena@gmail.com", number: "0852136547", address: "1308 Block FF", id: 'Merry Merry', quantity: 2, tAmount: 100.00},
  ]

  headElements = ['Name', 'Email Address', 'Phone Number', 'Address', 'Items', 'Quantity', 'Total Amount'];
totalPrice:number =0;
  constructor() { }

  ngOnInit(): void {

    for(let e of this.elements){
      this.totalPrice+=e.tAmount;
    }

    console.log(this.totalPrice);
  }

}
