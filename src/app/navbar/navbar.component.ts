
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{SevirceService} from '.././sevirce.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,
              private _router:Router, private data: SevirceService) { }
              
              loginClick():void{
                this._router.navigate(['/login'])
              }
              registerClick():void{
                this._router.navigate(['/register'])
              }

 public numberOfLikes=0;
 public numberofcart=0;
  // number= this.numberOfLikes;

  
  //constructor(private data: SevirceService) { }
  ngOnInit(): void {
    this.data.share.subscribe(x => this.numberOfLikes = x);
    this.data.share.subscribe(y => this.numberofcart = y)
  }

}
