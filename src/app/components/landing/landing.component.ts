import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  items: Array<{ image: string, title: string, category: string, price: number }> = [
    { image: "assets/Landing/Box3.png", title: "Merry Merry", category: "Christmas", price: 250 },
    { image: "assets/Landing/Box2.png", title: "Pink Happiness", category: "Birthday", price: 300 },
    { image: "assets/Landing/Box1.png", title: "Suprise Green", category: "For Him", price: 500 },
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
  constructor() { }

  ngOnInit(): void {
  }


  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    /*if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }*/
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

  homeFunction(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
