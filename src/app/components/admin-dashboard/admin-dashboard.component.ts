import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  //@ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean = false;

  constructor( private router: Router) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['/adminlogin']);
  }
}