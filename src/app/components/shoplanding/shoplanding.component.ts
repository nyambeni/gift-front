import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shoplanding',
  templateUrl: './shoplanding.component.html',
  styleUrls: ['./shoplanding.component.scss']
})
export class ShoplandingComponent implements OnInit {


  items: Array<{ image: string, title: string, category: string, price: number, numItems: number, wish: number, availItems: number }> = [
    { image: "assets/GiftBoxes/box1.png", title: "Cloth Work", category: "Birthday", price: 250, numItems: 0, wish:0, availItems: 5 },
    { image: "assets/GiftBoxes/box2.png", title: "Super Green", category: "Graduation", price: 300, numItems: 0, wish:0, availItems: 10 },//can also be for birthday
    { image: "assets/GiftBoxes/box3.png", title: "Lightin' Pink", category: "Birthday", price: 500, numItems: 0, wish:0, availItems: 5 },//can also be for birthday and valentin
    { image: "assets/GiftBoxes/box4.png", title: "Silver Scotch", category: "Christmas", price: 250, numItems: 0, wish:0, availItems: 20 },
    { image: "assets/GiftBoxes/box5.png", title: "Brownie", category: "Christmas", price: 300, numItems: 0, wish:0, availItems: 10 },
    { image: "assets/GiftBoxes/box6.png", title: "Green Bow", category: "Christmas", price: 500, numItems: 0, wish:0, availItems: 10 },
    { image: "assets/GiftBoxes/box7.png", title: "Red Rosey", category: "Valentine", price: 250, numItems: 0, wish:0, availItems: 20 },//can also be for christmas
    { image: "assets/GiftBoxes/box8.png", title: "Merry Merry", category: "Christmas", price: 300, numItems: 0, wish:0, availItems: 11 },
    { image: "assets/GiftBoxes/box9.png", title: "Boxey White", category: "Christmas", price: 500, numItems: 0, wish:0, availItems: 12 },
    { image: "assets/GiftBoxes/box10.png", title: "Star", category: "Birthday", price: 250, numItems: 0, wish:0, availItems: 10 },
    { image: "assets/GiftBoxes/box11.png", title: "Purple House", category: "Wedding", price: 300, numItems: 0, wish:0, availItems: 1 },//can aslo be used for birthday
    { image: "assets/GiftBoxes/box12.png", title: "Pinkie", category: "Wedding", price: 500, numItems: 0, wish:0, availItems: 20 },//can aslo be used for valentine/birthday/
    { image: "assets/GiftBoxes/box13.png", title: "Proud Merry", category: "Christmas", price: 250, numItems: 0, wish:0, availItems: 0 },
    { image: "assets/GiftBoxes/box14.png", title: "Yellow Bow", category: "Birthday", price: 300, numItems: 0, wish:0, availItems: 0 },//can aslo be used for christmas
    { image: "assets/GiftBoxes/box15.png", title: "Summer Loving", category: "Valentine", price: 500, numItems: 0, wish:0, availItems: 10 },//can aslo be used for birthday/wedding
    { image: "assets/GiftBoxes/box16.png", title: "Brown Merry", category: "Christmas", price: 250, numItems: 0, wish:0, availItems: 8 },//can aslo be used for valentine
    { image: "assets/GiftBoxes/box17.png", title: "Bronie and Red", category: "Wedding", price: 300, numItems: 0, wish:0, availItems: 30 },//can aslo be used for valentine/ christmas
    { image: "assets/GiftBoxes/box18.png", title: "Pink Happiness", category: "Baby Shower", price: 500, numItems: 0, wish:0, availItems: 20 },//can aslo be used for valentine/birthday
    { image: "assets/GiftBoxes/box19.png", title: "Red", category: "Christmas", price: 250, numItems: 0, wish:0, availItems: 30 },//can aslo be used for valentine/ christmas
    { image: "assets/GiftBoxes/box20.png", title: "Blue, Purple & Pink", category: "Baby Shower", numItems: 0, wish:0, price: 300, availItems: 15 },
    { image: "assets/GiftBoxes/box21.png", title: "Red Cross & Bow", category: "Valentine", price: 500, numItems: 0, wish:0, availItems: 11 },//can aslo be used for Birthday/ christmas
    { image: "assets/GiftBoxes/box22.png", title: "The Reddies", category: "Christmas", price: 250, numItems: 0, wish:0, availItems: 10 },//can aslo be used for valentine/ birthday
    { image: "assets/GiftBoxes/box23.png", title: "Blue Monday", category: "Graduation", price: 300, numItems: 0, wish:0, availItems: 9 },//can aslo be used for birthday
    { image: "assets/GiftBoxes/box24.png", title: "Blackie", category: "Graduation", price: 500, numItems: 0, wish:0, availItems: 8 },//can aslo be used for valentine/ birthday
    { image: "assets/GiftBoxes/box25.png", title: "Divine", category: "Christmas", price: 250, numItems: 0, wish:0, availItems: 8 },//can aslo be used for valentine

  ]

  add: Array<{ image: string, title: string, category: string, price: number, numItems: number, wish: number, availItems: number }> = [];
  wishL: Array<{ image: string, title: string, category: string, price: number, numItems: number,wish: number, availItems: number }> = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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

  bday: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number }> = [];
  wed: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number }> = [];
  bShower: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number }> = [];
  cMas: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number }> = [];
  valen: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number }> = [];
  grad: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number }> = [];
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
    for (let item of this.items) {
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
    for (let item of this.items) {
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
    for (let item of this.items) {
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
    for (let item of this.items) {
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
    for (let item of this.items) {
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
    for (let item of this.items) {
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
  incNum: number =0;
  addToCart(item: any, idItm: any) {
   
    if (item.numItems == 0) {
      this.i += 1;
      this.itm = this.i.toString();
      this.add.push(item);
      this.incNum=1;
      item.numItems = 1;
    }

    localStorage.setItem('items', JSON.stringify(this.add));
    console.log(this.add);
  }
  
//Add to wish list
  addToWish(item: any, idItm: any) {
   
    if (item.wish == 0) {
      this.w += 1;
      this.wish = this.w.toString();
      this.wishL.push(item);
      this.incNum = 2;
      item.wish=1;     
    }


    localStorage.setItem('wish', JSON.stringify(this.wishL));
    
    console.log(this.wishL);
  }
}

