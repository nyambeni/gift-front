import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  items: any;

  i: number = 0;
  itm: string = "";

  add: Array<{ image: string, title: string, category: string, price: number, numItems: number, wish: number, availItems: number }> = [];

  constructor() { }

  num: number = 0;
  ngOnInit(): void {
    const itemJson = localStorage.getItem('wish');
    this.items = itemJson !== null ? JSON.parse(itemJson) : null;

    if (this.items == null) {
      this.num = 1;
    }
    

    console.log(this.items);
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

  
  //items in the card
  incNum: number =0;
  price: number = 0;
  addToCart(item: any, idItm: any) {
   
    if (item.numItems == 0) {
      this.i += 1;
      this.itm = this.i.toString();
      this.add.push(item);
      this.incNum=1;
      item.numItems = 1;
    }

    this.price += item.price;

    localStorage.setItem('price', JSON.stringify(this.price));

    localStorage.setItem('items', JSON.stringify(this.add));
    console.log(this.add);
  }


  removeFromList(deletItm: any,) {
    this.items.splice(deletItm, 1);
  }

}
