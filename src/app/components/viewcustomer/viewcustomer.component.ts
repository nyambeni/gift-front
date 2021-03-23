import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.scss']
})
export class ViewcustomerComponent implements OnInit {

  headElements = ['First Name', 'Last Name', 'Email Address'];
  totalPrice: number = 0;
  constructor(private as: AdminService) { }

  customer: any = [];

  customers: any = [];

  ngOnInit(): void {
    //Get all the customers
    this.as.viewCustomer().subscribe(data => {
      console.log(data);

      this.customer = data;

      for (let c of this.customer) {
        this.customers.push(c);
      }
    });

    console.log(this.customers);


  }

  //Search a customer
  searchL: any = [];
  table: number = 1;
  amount: number = 0;
  name: any;
  searchName: string = "";

  onSearch(search: any) {

    //Search for by name
    this.name = search.toLowerCase();

    if (search == "") {
      alert("The is no name entered");
    }
    console.log(this.name);

    for (let e of this.customers) {

      this.searchName = (e.firstname ? e.firstname : '').toLowerCase();

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
      this.table = 1;
    } else {
      this.table = 2;
    }//end of name

    //Search by surname
    this.name = search.toLowerCase();

    if (search == "") {
      alert("The is no name entered");
    }

    for (let e of this.customers) {
      this.searchName = (e.lastname ? e.lastname : '').toLowerCase();
      if (this.searchName == this.name) {
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
    }//end of surname*/
  }
  viewAll() {
    this.table = 1;
    this.searchL = [];
    this.amount = 0;
  }


}