import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router, private as: AdminService, private cs: CustomerService) {

  }


  tPrice: number = 0;
  amt: number = 0;
  order: any = [];
  orders: any = [];
  custId: any;
  gifts: any = [];

  gitfBoxes: any = [];
  image: string = '';
  custName: any;

  ngOnInit(): void {

    const custIdJson = localStorage.getItem('id');
    this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;

    this.as.getOrderById(this.custId).subscribe(data => {

      console.log(data);

      this.order = data;

      for (let o of this.order) {
        o.order_date = o.order_date.split("T");
       
          this.orders.push(o);
        

      }
      for (let i of this.orders) {


        i.totalPrice = i.totalPrice * i.quantity;

        this.tPrice += i.totalPrice;
      }
    });

    const cust_id = { cust_id: this.custId };
    console.log(cust_id);
    this.cs.getCustomer(this.custId).subscribe((data: any) => {
      this.custName = data[0].firstname;
      console.log(data[0]);
    }, error => console.log(error));


    console.log(this.custId);

    /*this.as.getOrder().subscribe(data => {

      console.log(data);

      this.order = data;

      for (let o of this.order) {
        o.order_date = o.order_date.split("T");
        if (o.cust_id == this.custId) {
          this.orders.push(o);
        }

      }
      for (let i of this.orders) {


        i.totalPrice = i.totalPrice * i.quantity;

        this.tPrice += i.totalPrice;
      }
    });
    //End of order*/
    console.log(this.orders);
    //View Boxes
    this.as.viewItems().subscribe(data => {
      console.log(data);

      this.gifts = data;

      for (let c of this.gifts) {

        for (let o of this.orders) {
          if (o.item_title == c.title) {
            const gB = {
              item_id: c.item_id, category: c.category, image: c.image, item_descri: c.item_descri,
               item_price: c.item_price, size: c.size, title: c.title, quantity: o.quantity, 
               totalPrice: o.totalPrice, order_date: o.order_date[0]
            }

            this.gitfBoxes.push(gB);
          }
        }

      }

    });

    //End of Boxes



    console.log(this.orders);
    console.log(this.gitfBoxes);
  }


  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn")!.style.display = "block";
    } else {
      document.getElementById("myBtn")!.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })

  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
