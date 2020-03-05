import { Component, OnInit, Input } from '@angular/core';
import { SevirceService } from './../sevirce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private _SevirceService: SevirceService,
    private _activatedRouter:ActivatedRoute,
    private _router:Router ) { }

  submitOrder():void{
    this._router.navigate(['/order']);
  }

  submitCollect():void{
    this._router.navigate(['#']);
  }

  ngOnInit(): void {
  }

  
}
