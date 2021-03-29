import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-statistic-box',
  templateUrl: './statistic-box.component.html',
  styleUrls: ['./statistic-box.component.scss']
})
export class StatisticBoxComponent implements OnInit {

  constructor(private as: AdminService) { }


  customer: any = [];
  customers: any = [];
  numOfCustomer: number = 0;
  order: any = [];
  orders: any = [];
  numOfOrders: number = 0;

  view: number = 0;
  stop: number = 0;
  gifts: any = [];
  boxes: number = 0;

  ngOnInit(): void {

    //Get all the customers
    this.as.viewCustomer().subscribe(data => {
      console.log(data);

      this.customer = data;

      for (let c of this.customer) {

        this.numOfCustomer++;

        this.customers.push(c);
      }
    });

    console.log(this.customers);

    //Get all the Orders
    this.as.getOrder().subscribe(data => {
      console.log(data);

      this.order = data;

      for (let o of this.order) {
        this.numOfOrders++;
        this.orders.push(o);
      }
    });

    //View All The Items
    this.as.viewItems().subscribe(data => {
      console.log(data);

      this.gifts = data;

      for (let c of this.gifts) {
        this.boxes++;
      }

    });

  }

  //Generate results

  results() {
    this.view = 1;


    for (let c of this.orders) {
      if (this.stop == 0) {

      }
    }
    this.stop = 1;


  }
}
