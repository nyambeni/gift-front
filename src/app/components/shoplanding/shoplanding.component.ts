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
  wishListError = '';


  constructor(private router: Router, private cs: CustomerService, private as: AdminService) { }

  gifts: any = [];

  gitfBoxes: any = [];
  image: string = '';
  numItems: number = 0;
  wishI: number = 0
  selectI: number = 0
  availItems: number = 10;

  i: number = 0;
  itm: string = "0";

  w: number = 0;
  wish: string = "0";


  custId: any;

  custName = '';

  ngOnInit(): void {

    const custIdJson = localStorage.getItem('id');
    this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;

    // this.custId = "112";

    const cust_id = { cust_id: this.custId };
    console.log(cust_id);
    this.cs.getCustomer(this.custId).subscribe((data: any) => {
      this.custName = data[0]?.firstname;
      console.log(data[0]);
    }, error => console.log(error));


    console.log(this.custName);

    //Get All The Items
    this.as.viewItems().subscribe(data => {
      console.log(data);

      this.gifts = data;

      for (let c of this.gifts) {
        /*this.image = "assets/GiftBoxes/" + c.image + ".png";
        c.image = this.image;*/
        const gB = {
          item_id: c.item_id, category: c.category, image: c.image, item_descri: c.item_descri, item_price: c.item_price, size: c.size, title: c.title, numItems: this.numItems, wishI: this.wishI, selectI: this.selectI, availItems: c.avail_item
        }

        this.gitfBoxes.push(gB);
        console.log(gB);
      }


    });

    //Assign a link for images
    /*for (let e of this.gitfBoxes) {
      //this.image = "assets/GiftBoxes/" + e.image + ".png";
      e.image = this.image;
    }*/
    console.log(this.gitfBoxes);

    /*const itemJson = localStorage.getItem('items');
    this.add = itemJson !== null ? JSON.parse(itemJson) : null;

    for (let a of this.add) {
      this.i += 1;
      this.itm = this.i.toString();
    }

    for (let w of this.wishL) {
      this.w += 1;
      this.wish = this.w.toString();
    }*/
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

  // items in the card
  num: number = 0;
  times: number = 1;


  boxes: any = [];
  title: string = '';
  //categories
  birthday() {
    if (this.times == 2) {
      this.times = 1;
      this.boxes = [];
    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Birthday" || item.category == "birthday" && this.times == 1)
        this.boxes.push(item);
    }
    this.title = "Birthday";
    this.times = 2;
    this.num = 1;
    console.log(this.boxes);
  }

  wedding() {
    if (this.times == 2) {
      this.times = 1;
      this.boxes = [];
    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Wedding" && this.times == 1)
        this.boxes.push(item);
    }

    this.title = "Wedding";
    this.times = 2;
    this.num = 1;
    console.log(this.boxes);
  }

  babyShower() {

    if (this.times == 2) {
      this.times = 1;
      this.boxes = [];
    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Baby Shower" && this.times == 1)
        this.boxes.push(item);
    }
    this.title = "Baby Shower";
    this.times = 2;
    this.num = 1;
    console.log(this.boxes);
  }

  christmas() {
    if (this.times == 2) {
      this.times = 1;
      this.boxes = [];
    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Christmas" && this.times == 1)
        this.boxes.push(item);
    }
    this.title = "Christmas";
    this.times = 2;
    this.num = 1;
    console.log(this.boxes);
  }

  valentine() {
    if (this.times == 2) {
      this.times = 1;
      this.boxes = [];
    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Valentine" && this.times == 1)
        this.boxes.push(item);
    }
    this.title = "Valentine";
    this.times = 2;
    this.num = 1;
    console.log(this.boxes);
  }

  gradution() {

    if (this.times == 2) {
      this.times = 1;
      this.boxes = [];
    }
    for (let item of this.gitfBoxes) {
      if (item.category == "Graduation" && this.times == 1)
        this.boxes.push(item);
    }
    this.title = "Graduation";
    this.times = 2;
    this.num = 1;
    console.log(this.boxes);
  }

  all() {


    if (this.times == 2) {
      this.boxes = [];
    }
    this.num = 0;
    console.log(this.boxes);
  }

  //items in the card
  incNum: number = 0;
  price: number = 0;
  addToCart(item: any, idItm: any) {

    const custIdJson = localStorage.getItem('id');
    this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;

    if (this.custId == null) {
      this.router.navigate(['/login']);
    } else {


      //this.custId = "112";
      if (item.selectI == 0) {
        this.i += 1;
        this.itm = this.i.toString();

        this.incNum = 1;
        item.selectI = 1;
        const AddItem = { cust_id: this.custId, image: item.image, item_title: item.title, category: item.category, item_price: item.item_price, item_description: item.item_descri, size: item.size, availItems: this.availItems }
        this.add.push(AddItem);
      }

      this.price += item.price;
    }

    localStorage.setItem('price', JSON.stringify(this.price));

    localStorage.setItem('items', JSON.stringify(this.add));
    console.log(this.add);
  }


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
        const wishItem = {
          cust_id: this.custId, image: item.image, item_title: item.title,
          category: item.category, item_price: item.item_price, item_description: item.item_descri, size: item.size
        }

        this.cs.addwishlist(wishItem).
          subscribe((data: any) => {
            this.wishListError = data
          });
        console.log(wishItem);
        console.log(this.wishListError);

        this.w += 1;
        this.wish = this.w.toString();
        this.wishL.push(item);
        this.incNum = 2;
        item.wishI = 1;
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

