import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ViewChild, ElementRef } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  testing: any = [{ name: "Loy", text: "The very definition of cool is being calm, composed, under control, not excited, indifferent, and socially adept. Many times, cool people are those that don't get excited about things, that don't always have to talk, unless they have something cool to say." },
  { name: "Roy", text: "The very definition of cool is being calm, composed, under control, not excited, indifferent, and socially adept. Many times, cool people are those that don't get excited about things, that don't always have to talk, unless they have something cool to say." },
  { name: "Joy", text: "The very definition of cool is being calm, composed, under control, not excited, indifferent, and socially adept. Many times, cool people are those that don't get excited about things, that don't always have to talk, unless they have something cool to say." },]

  months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  headElements = ['First Name', 'Last Name', 'Email Address', 'Date'];
  headElements2 = ['Name', 'Phone Number', 'Address', 'Items', 'Quantity'];
  constructor(private adminService: AdminService, private fb: FormBuilder) { }

  reportForm = this.fb.group({
    month: ['']
  });

  num: number = 0;
  num2: number = 1;
  tNum: number = 0;
  ngOnInit(): void {

    for (let t of this.testing) {
      this.tNum++;
    }


  }

  customer: any = [];

  order: any = [];
  currentMonth: string = '';
  numOfCustomer: number = 0;
  numOfOrder: number = 0;
  totalPrice: number = 0;
  price: number = 0;

  page: boolean = false;

  viewOrder: boolean = false;
  viewCustomer: boolean = false;

  onSubmit() {
    console.log(this.reportForm.value.month);

    const monthNum = this.getMonth(this.reportForm.value.month);

    this.adminService.customerMonthlyReport(monthNum)
      .subscribe((data) => {
        console.log(data);
        this.customer = data;

        for (let c of this.customer) {
          
          c.date_created = c.date_created.split("T");

        }

        this.numOfCustomer = this.customer.length;
        console.log(this.customer);
      });

    this.adminService.orderMonthlyReport(monthNum)
      .subscribe((data) => {
        this.order = data;
        this.numOfOrder = this.order.length;
        console.log(data);

        for (let o of this.order) {
          this.price = o.totalPrice * o.quantity;
          this.totalPrice += this.price;
          o.order_date = o.order_date.split("T");
          //totalPrice
          //quantity
        }
        console.log(this.totalPrice);
      });

    this.currentMonth = this.reportForm.value.month;

    this.page = true;
  }

  viewCustomers() {
    this.page = true;
    this.viewCustomer = true;
    this.viewOrder = false;
  }

  viewOrders() {
    this.page = true;
    this.viewCustomer = false;
    this.viewOrder = true;
  }

  get month() { return this.reportForm.get('month') }

  getMonth(month: string) {
    if (month == "January") return 1;
    else if (month == "February") return 2;
    else if (month == "March") return 3;
    else if (month == "April") return 4;
    else if (month == "May") return 5;
    else if (month == "June") return 6;
    else if (month == "July") return 7;
    else if (month == "August") return 8;
    else if (month == "September") return 9;
    else if (month == "October") return 10;
    else if (month == "November") return 11;
    else return 12
  }
  /**/
  //Next and previous 
  next() {
    this.num++;
    this.num2++

    if (this.num2 == this.tNum) {

    }
  }

  prev() {
    this.num--;
    this.num2--;
  }

}

//For pdf
//npm install jspdf --save 