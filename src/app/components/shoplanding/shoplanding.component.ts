import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-shoplanding',
  templateUrl: './shoplanding.component.html',
  styleUrls: ['./shoplanding.component.scss']
})
export class ShoplandingComponent implements OnInit {

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

