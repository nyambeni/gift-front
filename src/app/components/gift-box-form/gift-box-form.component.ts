import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-gift-box-form',
  templateUrl: './gift-box-form.component.html',
  styleUrls: ['./gift-box-form.component.scss']
})
export class GiftBoxFormComponent implements OnInit {

  categories = [ "Birthday", "Wedding", "Graduation", "Baby Shower", "Christmas", "Valentine"];
  giftBoxForm = this.fb.group({
    title: [''],
    category: [''],
    size: [''],
    price: [''],
    quantity: ['']
  });

  constructor(private fb: FormBuilder,private as: AdminService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value

    this.as.sendGiftBox(this.giftBoxForm.value)
    .subscribe(data => console.log(data), error => console.log(error));
  }
  

}
