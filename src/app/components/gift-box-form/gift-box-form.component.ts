import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gift-box-form',
  templateUrl: './gift-box-form.component.html',
  styleUrls: ['./gift-box-form.component.scss']
})
export class GiftBoxFormComponent implements OnInit {

  categories = [ "Birthday", "Wedding", "Graduation", "Baby Shower", "Christmas", "Valentine"];
  giftBoxForm = new FormGroup({
    title: new FormControl(''),
    category: new FormControl(''),
    size: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('000000000000');
    console.log(this.giftBoxForm.value);
    console.warn(this.giftBoxForm.value);
  }
  

}
