import { Component, OnInit } from '@angular/core';
import { SevirceService } from './../sevirce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _SevirceService: SevirceService,
    private _activatedRouter:ActivatedRoute,
    private _router:Router ) { }

  ngOnInit(): void {
  }

}
