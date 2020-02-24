import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,) { }

  submitCart():void{
    this._router.navigate(['/login'])
  }


  ngOnInit(): void {
  }

}
