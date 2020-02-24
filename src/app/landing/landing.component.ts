import { Component, OnInit } from '@angular/core';
import{SevirceService} from '.././sevirce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public count= 1;

  public counter() {
    this.count += 1;
  }

  //public numberOfLikes: number=0;
  public numberOfLikes=0;
  public numberOfcart=0;

 public likeButtonClick() {
    this.numberOfLikes++;
  }
  public cartButtonClick() {
    this.numberOfcart++;
  }

  public dislikeButtonClick() {
    this.numberOfLikes--;
  }


  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router, private data: SevirceService) { }

  ngOnInit(): void {
  }

 

updateText(numberOfLikes){
  this.data.updateData(numberOfLikes);
}

updateCart(numberOfcart){
  this.data.updateData(numberOfcart);
}

}
