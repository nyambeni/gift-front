import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

//import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-shoplanding',
  templateUrl: './shoplanding.component.html',
  styleUrls: ['./shoplanding.component.scss']
})
export class ShoplandingComponent implements OnInit {


  items: Array<{ image: string, title: string, category: string, price: number, numItems: number, wish: number, availItems: number, desc:string, selectI: number }> = [
    { image: "assets/GiftBoxes/box1.png", title: "Cloth Work", category: "Birthday", price: 150, numItems: 0, wish:0, availItems: 5, desc: "Medium Size Box.", selectI: 0 },
    { image: "assets/GiftBoxes/box2.png", title: "Super Green", category: "Graduation", price: 120, numItems: 0, wish:0, availItems: 10, desc: "Medium/Large Size Box, comes in camo green.", selectI: 0 },//can also be for birthday
    { image: "assets/GiftBoxes/box3.png", title: "Lightin' Pink", category: "Birthday", price: 100, numItems: 0, wish:0, availItems: 5, desc: "Medium Size Box, with a pink color and light pink stripes.", selectI: 0 },//can also be for birthday and valentin
    { image: "assets/GiftBoxes/box4.png", title: "Silver Scotch", category: "Christmas", price: 150, numItems: 0, wish:0, availItems: 20, desc: "Medium Size Box, with silver scotch pattern.", selectI: 0 },
    { image: "assets/GiftBoxes/box5.png", title: "Brownie", category: "Christmas", price: 80, numItems: 0, wish:0, availItems: 10, desc: "Small Size Box, covered with brown color.", selectI: 0 },
    { image: "assets/GiftBoxes/box6.png", title: "Green Bow", category: "Christmas", price: 100, numItems: 0, wish:0, availItems: 10, desc: "Medium Size Box, simple box.", selectI: 0 },
    { image: "assets/GiftBoxes/box7.png", title: "Red Rosey", category: "Valentine", price: 50, numItems: 0, wish:0, availItems: 20, desc: "XS Size Boxes, they come as a set.", selectI: 0 },//can also be for christmas
    { image: "assets/GiftBoxes/box8.png", title: "Merry Merry", category: "Christmas", price: 50, numItems: 0, wish:0, availItems: 11, desc: "XS Size Box, only comes in white and with a green and white string.", selectI: 0 },
    { image: "assets/GiftBoxes/box9.png", title: "Boxey White", category: "Christmas", price: 70, numItems: 0, wish:0, availItems: 12, desc: "Small Size Box, with some christmas gold glitter.", selectI: 0 },
    { image: "assets/GiftBoxes/box10.png", title: "Star", category: "Birthday", price: 80, numItems: 0, wish:0, availItems: 10, desc: "Small Size Box.", selectI: 0 },
    { image: "assets/GiftBoxes/box11.png", title: "Purple House", category: "Wedding", price: 50, numItems: 0, wish:0, availItems: 1, desc: "XS Size Box, built to look like a house.", selectI: 0 },//can aslo be used for birthday
    { image: "assets/GiftBoxes/box12.png", title: "Pinkie", category: "Wedding", price: 120, numItems: 0, wish:0, availItems: 20, desc: "Small Size Box, pink and white stripe box.", selectI: 0 },//can aslo be used for valentine/birthday/
    { image: "assets/GiftBoxes/box13.png", title: "Proud Merry", category: "Christmas", price: 150, numItems: 0, wish:0, availItems: 0, desc: "Large Size Box, comes wrapped in a brown cover with a red string.", selectI: 0 },
    { image: "assets/GiftBoxes/box14.png", title: "Yellow Bow", category: "Birthday", price: 150, numItems: 0, wish:0, availItems: 0, desc: "Medium Size Box, Comes with a one of a kind yellow bow.", selectI: 0 },//can aslo be used for christmas
    { image: "assets/GiftBoxes/box15.png", title: "Summer Loving", category: "Valentine", price: 130, numItems: 0, wish:0, availItems: 10, desc: "Medium Size Box, Comes in a heart shaped box.", selectI: 0 },//can aslo be used for birthday/wedding
    { image: "assets/GiftBoxes/box16.png", title: "Brown Merry", category: "Christmas", price: 200, numItems: 0, wish:0, availItems: 8, desc: "Large Size Box, brown box with a red bow.", selectI: 0 },//can aslo be used for valentine
    { image: "assets/GiftBoxes/box17.png", title: "Bronie and Red", category: "Wedding", price: 80, numItems: 0, wish:0, availItems: 30, desc: "Small Size Box.", selectI: 0 },//can aslo be used for valentine/ christmas
    { image: "assets/GiftBoxes/box18.png", title: "Pink Happiness", category: "Baby Shower", price: 100, numItems: 0, wish:0, availItems: 20, desc: "Small Size Box, Comes an octagon shape.", selectI: 0 },//can aslo be used for valentine/birthday
    { image: "assets/GiftBoxes/box19.png", title: "Red", category: "Christmas", price: 50, numItems: 0, wish:0, availItems: 30, desc: "XS Size Box, comes in red color.", selectI: 0 },//can aslo be used for valentine/ christmas
    { image: "assets/GiftBoxes/box20.png", title: "Blue, Purple & Pink", category: "Baby Shower", numItems: 0, wish:0, price: 100, availItems: 15, desc: "XS Size Boxes, they come as a set.", selectI: 0 },
    { image: "assets/GiftBoxes/box21.png", title: "Red Cross & Bow", category: "Valentine", price: 80, numItems: 0, wish:0, availItems: 11, desc: "XS Size Box, comes in brown and a red bow.", selectI: 0 },//can aslo be used for Birthday/ christmas
    { image: "assets/GiftBoxes/box22.png", title: "The Reddies", category: "Christmas", price: 100, numItems: 0, wish:0, availItems: 10, desc: "XXS Size Box, comes in a set.", selectI: 0 },//can aslo be used for valentine/ birthday
    { image: "assets/GiftBoxes/box23.png", title: "Blue Monday", category: "Graduation", price: 120, numItems: 0, wish:0, availItems: 9, desc: "XS Size Box.", selectI: 0 },//can aslo be used for birthday
    { image: "assets/GiftBoxes/box24.png", title: "Blackie", category: "Graduation", price: 80, numItems: 0, wish:0, availItems: 8, desc: "XS Size Box.", selectI: 0 },//can aslo be used for valentine/ birthday
    { image: "assets/GiftBoxes/box25.png", title: "Divine", category: "Christmas", price: 80, numItems: 0, wish:0, availItems: 8, desc: "Medium Size Box, has some pattern and comes in red.", selectI: 0 },//can aslo be used for valentine

  ]

  add: Array<{ image: string, title: string, category: string, price: number, numItems: number, wish: number, availItems: number, desc:string, selectI: number }> = [];
  wishL: Array<{ image: string, title: string, category: string, price: number, numItems: number,wish: number, availItems: number, desc:string, selectI: number }> = [];


  constructor(private router: Router, /*private cs: CustomerService*/) { }

  /*item: any = [];

  boxes: any = [];*/

  ngOnInit(): void {
    /*this.cs.getAllItems().subscribe(item => {
      this.item = item;
      console.log(this.item);
    });

    this.boxes.push(this.item);*/

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
    document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})
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

  bday: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number, desc:string, selectI: number }> = [];
  wed: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number, desc:string, selectI: number }> = [];
  bShower: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number, desc:string, selectI: number }> = [];
  cMas: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number, desc:string, selectI: number }> = [];
  valen: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number, desc:string, selectI: number }> = [];
  grad: Array<{ image: string, title: string, category: string, price: number, numItems: number, availItems: number, desc:string, selectI: number }> = [];
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
  price: number = 0;
  addToCart(item: any, idItm: any) {
   
    if (item.selectI == 0) {
      this.i += 1;
      this.itm = this.i.toString();
      this.add.push(item);
      this.incNum=1;
      item.selectI = 1;
    }

    this.price += item.price;

    localStorage.setItem('price', JSON.stringify(this.price));

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

