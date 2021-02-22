import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-box',
  templateUrl: './view-box.component.html',
  styleUrls: ['./view-box.component.scss']
})
export class ViewBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elements: any = [
    {id: 'Marry Marry', first: 'Wedding', last: 'Large', handle: 'R 600.00'},
    {id: 'Pink Happiness', first: 'Birthday', last: 'Small', handle: 'R200.00'},
    {id: 'Real Power', first: 'Graduation', last: 'Small', handle: 'R210.00'},
  ];

  headElements = ['Title', 'Category', 'Size', 'Price', 'Action'];

}
