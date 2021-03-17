import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  items: Array<{ image: string, title: string, category: string, price: number, itmSelect: number }> = [
    { image: "assets/Landing/Box3.png", title: "Merry Merry", category: "Christmas", price: 50, itmSelect: 2 },
    { image: "assets/Landing/Box2.png", title: "Pink Happiness", category: "Baby Shower", price: 100, itmSelect: 3 },
    { image: "assets/Landing/Box1.png", title: "Suprise Green", category: "Graduation", price: 120, itmSelect: 2 },
  ]

  add: Array<{ image: string }> = [
    { image: "assets/ForAdd/1.jpg" },
    { image: "assets/ForAdd/2.jpg" },
    { image: "assets/ForAdd/3.jpg" },
  ]

  add2: Array<{ image: string }> = [

    { image: "assets/ForAdd/4.jpg" },
    { image: "assets/ForAdd/5.jpg" },
    { image: "assets/ForAdd/6.jpg" },
  ]
  constructor(private as: AdminService) {

  }


  tPrice: number = 0;
  amt: number = 0;
  order: any = [];
  orders: any = [];
  custId: any;
  gifts: any = [];

  gitfBoxes: any = [];
  image: string = '';

  ngOnInit(): void {
//View Order

const custIdJson = localStorage.getItem('id');
this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;
    
    console.log(this.custId);
    //this.custId = "112";
    this.as.getOrder().subscribe(data => {
      console.log(data);

      this.order = data;

      for (let o of this.order) {
        o.order_date = o.order_date.split("T");
        if (o.cust_id == this.custId) {
          this.orders.push(o);
        }

      }
      for (let i of this.orders) {
        this.tPrice += i.totalPrice;
      }
    });
//End of order

//View Boxes
this.as.viewItems().subscribe(data => {
  console.log(data);

  this.gifts = data;

  for (let c of this.gifts) {
    this.image = "assets/GiftBoxes/" + c.image + ".png";
    c.image = this.image;

    for(let o of this.orders){
      if(o.item_title == c.title){
        const gB = {
          item_id: c.item_id, category: c.category, image: c.image, item_descri: c.item_descri, item_price: c.item_price, size: c.size, title: c.title, quantity: o.quantity, totalPrice: o.totalPrice
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
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  homeFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


}
