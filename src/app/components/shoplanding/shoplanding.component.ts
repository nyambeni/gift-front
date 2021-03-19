import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-shoplanding',
  templateUrl: './shoplanding.component.html',
  styleUrls: ['./shoplanding.component.scss']
})
export class ShoplandingComponent implements OnInit {
  add: any = [];
  wishL: any = [];


  constructor(private router: Router, private cs: CustomerService, private as: AdminService) { }

  gifts: any = [];

  gitfBoxes: any = [];
  image: string = '';
  numItems: number = 0;
  wishI: number = 0
  selectI: number = 0
  availItems: number = 10;

  ngOnInit(): void {

    this.as.viewItems().subscribe(data => {
      console.log(data);

      this.gifts = data;

      for (let c of this.gifts) {
        this.image = "assets/GiftBoxes/" + c.image + ".png";
        c.image = this.image;
        const gB = {
          item_id: c.item_id, category: c.category, image: c.image, item_descri: c.item_descri, item_price: c.item_price, size: c.size, title: c.title, numItems: this.numItems, wishI: this.wishI, selectI: this.selectI, availItems: this.availItems
        }

        this.gitfBoxes.push(gB);
      }

    });

    for (let e of this.gitfBoxes) {
      this.image = "assets/GiftBoxes/" + e.image + ".png";
      e.image = this.image;
    }
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

  bottomFunction() {
    document.body.scrollTop = 10000; // For Safari
    document.documentElement.scrollTop = 10000; // For Chrome, Firefox, IE and Opera
  }

  homeFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // items in the card

  bday: any = [];
  wed: any = [];
  bShower: any = [];
  cMas: any = [];
  valen: any = [];
  grad: any = [];
  num: number = 0;
  times: number = 1;

  i: number = 0;
  itm: string = "";

  w: number = 0;
  wish: string = "";
  //categories
  birthday() {

    if (this.times == 2) {
      this.times = 1;

      this.bday = [];
    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Birthday" && this.times == 1)
        this.bday.push(item);

    }
    this.times = 2;
    this.num = 1;
    console.log(this.bday);
  }

  wedding() {


    if (this.times == 2) {
      this.times = 1;

      this.wed = [];

    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Wedding" && this.times == 1)
        this.wed.push(item);
    }
    this.times = 2;
    this.num = 2;
    console.log(this.wed);
  }

  babyShower() {
    if (this.times == 2) {
      this.times = 1;
      this.bShower = [];

    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Baby Shower" && this.times == 1)
        this.bShower.push(item);
    }
    this.times = 2;
    this.num = 3;
    console.log(this.bShower);
  }

  christmas() {
    if (this.times == 2) {
      this.times = 1;
      this.cMas = [];

    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Christmas" && this.times == 1)
        this.cMas.push(item);
    }
    this.times = 2;
    this.num = 4;
    console.log(this.cMas);
  }

  valentine() {
    if (this.times == 2) {
      this.times = 1;
      this.valen = [];

    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Valentine" && this.times == 1)
        this.valen.push(item);
    }
    this.times = 2;
    this.num = 5;
    console.log(this.valen);
  }

  gradution() {
    if (this.times == 2) {
      this.times = 1;
      this.grad = [];
    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Graduation" && this.times == 1)
        this.grad.push(item);
    }
    this.times = 2;
    this.num = 6;
    console.log(this.grad);
  }

  all() {
    if (this.times == 2) {
      this.times = 1;
      this.bday = [];
      this.wed = [];
      this.bShower = [];
      this.valen = [];
      this.grad = [];
      this.cMas = [];
    }
    this.num = 0;
  }

  //items in the card
  incNum: number = 0;
  price: number = 0;
  addToCart(item: any, idItm: any) {

    if (item.selectI == 0) {
      this.i += 1;
      this.itm = this.i.toString();
      this.add.push(item);
      this.incNum = 1;
      item.selectI = 1;
    }

    this.price += item.price;

    localStorage.setItem('price', JSON.stringify(this.price));

    localStorage.setItem('items', JSON.stringify(this.add));
    console.log(this.add);
  }

  custId: any;
  //Add to wish list
  addToWish(item: any, idItm: any) {


    const custIdJson = localStorage.getItem('id');
    this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;


     //this.custId = "112";
    console.log(this.custId);


    if (this.custId == null) {

      this.router.navigate(['/login']);
    } else {
      if (item.wishI == 0) {
        const wishItem = { cust_id: this.custId, image: item.image, item_title: item.title, category: item.category, item_price: item.item_price, item_description: item.item_descri, size: item.size }

        this.cs.addwishlist(wishItem).
          subscribe(data => console.log(data));
        console.log(wishItem);
        this.w += 1;
        this.wish = this.w.toString();
        this.wishL.push(item);
        this.incNum = 2;
        item.wish = 1;
      }

      //this.cs.addwishlist(wishItem).subscribe((data) => console.log(data));

      // localStorage.setItem('wish', JSON.stringify(this.wishL));

      console.log(this.wishL);
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}

