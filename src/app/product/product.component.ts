import { Component, OnInit } from '@angular/core';
import{SevirceService} from '.././sevirce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
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

  
updateLikes(numberOfLikes){
  this.data.updateData(numberOfLikes);
}

updateCart(numberOfcart){
  this.data.updateData(numberOfcart);
}

}
