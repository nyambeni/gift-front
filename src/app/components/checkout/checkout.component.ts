import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  //Items
  items: any = [];
  num: number = 0;
  incNum: number = 0;
  price: any;

  constructor(private fb: FormBuilder) { }

  step1 = false;
  step2 = false;
  step3 = false;

  ngOnInit(): void {
    const itemJson = localStorage.getItem('items');
    this.items = itemJson !== null ? JSON.parse(itemJson) : null;

    if (this.items == null) {
      this.num = 1;
    }

    for (let i of this.items) {
      i.numItems = 1;
    }

    const priceJson = localStorage.getItem('price');
    this.price = priceJson !== null ? JSON.parse(priceJson) : null;

    console.log(this.items);
  }

  onDelete(deletItm: any, itmPrice: any, titl: any) {
    this.items.splice(deletItm, 1);
    this.price -= itmPrice;
    console.log(this.price);

    for (let item of this.items) {
      if (titl == item.title) {
        item.numItems--;
        console.log(item);
      }
    }



    console.log(this.items.length);
    console.log(this.items);
  }

  cancelOrder() {
    this.items = [];
    console.log(this.items);
    this.price = 0;
  }


  shippingForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(3)]],
    streetAddress: ['', [Validators.required, Validators.minLength(3)]],
    province: ['', [Validators.required, Validators.minLength(3)]],
    citySuburb: ['', [Validators.required, Validators.minLength(3)]],
    postalCode: ['', [Validators.required, Validators.minLength(3)]],
  });

  get name() { return this.shippingForm.get('name') }

  get phoneNumber() { return this.shippingForm.get('phoneNumber') }

  get streetAddress() { return this.shippingForm.get('streetAddress') }

  get province() { return this.shippingForm.get('province') }

  get citySuburb() { return this.shippingForm.get('citySuburb') }

  get postalCode() { return this.shippingForm.get('postalCode') }

  billingForm = this.fb.group({
    cardNumber: ['', [Validators.required, Validators.minLength(3)]],
    expiryDate: ['', Validators.required],
    cvv: ['', Validators.required],
    zip: ['', [Validators.required, Validators.minLength(3)]],
    cardName: ['', [Validators.required, Validators.minLength(3)]],

  });

  get cardNumber() { return this.billingForm.get('cardNumber') }

  get expiryDate() { return this.billingForm.get('expiryDate') }

  get cvv() { return this.billingForm.get('cvv') }

  get zip() { return this.billingForm.get('zip') }

  get cardName() { return this.billingForm.get('cardName') }

  onSubmit() {
    console.log("***** Shiping Information *****");
    console.log(this.shippingForm.value);
    document.getElementById("cirle2")!.style.backgroundColor = "rgb(40, 207, 40)";
    this.step2 = false;
    this.step3 = true;
  }

  onFormSubmit() {
    console.log("**** Billing Form");
    console.log(this.billingForm.value);
    document.getElementById("cirle3")!.style.backgroundColor = "rgb(40, 207, 40)";
  }

  stepOne() {
    console.log("One has been pressed");
  }

  stepTwo() {
    console.log("Two has been pressed");
    this.step3 = false;
    this.step2 = true;
  }

  stepThree() {
    console.log("Three has been pressed");
    this.step2 = false;
    this.step3 = true;
  }

  subt(itemId: any, item: any) {

    item.availItems--;
    item.numItems++;

    if (item.availItems <= 0) {
      item.availItems = 0;
    }

    this.price += item.price;

    console.log(item.numItems);
    console.log(item);

  }


  addQ(item: any) {
    if (item.numItems < item.availItems) {
      item.numItems++;
      this.price += item.price;
    }
    
    if (item.numItems == item.availItems) {
      alert("No more items left of " + item.title);
    }
    
  }

  subQ(item: any) {
    item.numItems--;
    if (item.numItems <= 0) {
      item.numItems = 1;


    }

    if (item.numItems >= 1) {

      this.price -= item.price;
    }

  }
}
