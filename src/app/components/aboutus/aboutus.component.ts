import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

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
    document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})
    
  }
  
myVideo:any = document.getElementById("video1"); 

playPause() { 
  if (this.myVideo.paused) 
  this.myVideo.play(); 
  else 
  this.myVideo.pause(); 
} 

makeBig() { 
  this.myVideo.width = 560; 
} 

 makeSmall() { 
  this.myVideo.width = 320; 
} 

makeNormal() { 
  this.myVideo.width = 420; 
} 


}
