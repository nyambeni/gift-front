import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

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
  constructor() { 
    localStorage.clear();
  }


tPrice:number=0;
amt:number=0;
  ngOnInit(): void {

    for(let i of this.items){
      this.amt=i.price*i.itmSelect;
      this.tPrice+=this.amt;
    }

    console.log(this.tPrice);
    
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
  homeFunction(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


}
