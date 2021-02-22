import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  shippingForm = this.fb.group({
    name: [''],
    phoneNumber: [''],
    streetAddress: [''],
    province: [''],
    citySuburb: [''],
    postalCode: ['']
  });

  billingForm = this.fb.group({
    cardNumber: [''],
    expiryDate: [''],
    cvv: [''],
    zip: [''],
    cardName: ['']
    
  });

  onSubmit(){
    console.log("***** Shiping Information *****");
    console.log(this.shippingForm.value);
  }

  onFormSubmit(){
    console.log("**** Billing Form");
    console.log(this.billingForm.value);
  }
}
