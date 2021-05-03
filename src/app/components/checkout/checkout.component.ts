import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {FormControl, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  items: any = [];
  num: number = 0;
  incNum: number = 0;
  price: number=0;

  customer: any;
  custId: any;

  alNum:number =0;

  constructor(private fb: FormBuilder, private os: OrderService, private router: Router, private cs: CustomerService) { }

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  ngOnInit(): void {
    //Get Customer
    const custIdJson = localStorage.getItem('id');
    this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;

   
    const cust_id = { cust_id:this.custId };
    console.log(cust_id);
    this.cs.getCustomer(this.custId).subscribe((data: any) => {
      this.customer = data[0];
      console.log(data);
    }, error => console.log(error));


    //Get Items From LocalStorage
    const itemJson = localStorage.getItem('items');
    this.items = itemJson !== null ? JSON.parse(itemJson) : null;

    if (this.items == null) {
      this.num = 1;
    }

    for (let i of this.items) {
      i.numItems = 1;
      this.price += parseInt(i.item_price);
      console.log(this.price);
    }

    /*const priceJson = localStorage.getItem('price');
    this.price = priceJson !== null ? JSON.parse(priceJson) : null;*/

    console.log(this.items);

  }

  //Remove Item from the selected items
  priceToDelete: number = 0;
  onDelete(deletItm: any, itmPrice: number, titl: any, numItems: any) {
    this.items.splice(deletItm, 1);
    this.priceToDelete = itmPrice * numItems;
    console.log(this.priceToDelete);
    this.price -= this.priceToDelete;
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

  //Cancel Order
  cancelOrder() {
    this.items = [];
    console.log(this.items);
    this.price = 0;
  }

//Shipping form
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

  //Billing form
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


  onShippingFormSubmit() {
    console.log("***** Shiping Information *****");
    console.log(this.shippingForm.value);
    document.getElementById("cirle2")!.style.backgroundColor = "rgb(40, 207, 40)";
    this.stepThree();
    //call api to send info
  }


  onBillingFormSubmit() {
    console.log("**** Billing Form");
    console.log(this.billingForm.value);
    document.getElementById("cirle3")!.style.backgroundColor = "rgb(40, 207, 40)";

  for (let item of this.items) {


      const order = {
        cust_id: localStorage.getItem('id'), item_title: item. item_title, quantity: item.numItems, totalPrice: item.item_price
        , phoneNumber: this.shippingForm.value.phoneNumber, name: this.shippingForm.value.name,
        citySuburb: this.shippingForm.value.citySuburb, postalCode: this.shippingForm.value.postalCode,
        province: this.shippingForm.value.province, streetAddress: this.shippingForm.value.streetAddress
      }
      console.log(this.shippingForm.value.streetAddress);
      console.log("call api")

      this.os.sendOrder(order).subscribe((data) => console.log(data), ERR => console.log(ERR));
    }
    this.alNum = 1;
    

    //call API
    //const order = {}
    //this.os.sendOrder
  }

  //Make step1 visible and hidde others
  stepOne() {
    console.log("One has been pressed");
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
  }

  //Make step2 visible and hidde others
  stepTwo() {
    console.log("Two has been pressed");
    this.step1 = false;
    this.step2 = true;
    this.step3 = false;
  }

  //Make step3 visible and hidde others
  stepThree() {
    console.log("Three has been pressed");
    this.step1 = false;
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

//Add Quantity
  addQ(item: any) {
    if (item.numItems < item.availItems) {
      item.numItems++;
      console.log(item.numItems);
      this.price += parseInt(item.item_price);
    }

    if (item.numItems == item.availItems) {
      alert("No more items left of " + item.title);
    }

  }

  //Subtract quantity
  subQ(item: any) {
    item.numItems--;
    if (item.numItems <= 0) {
      item.numItems = 1;
    }

    if (item.numItems >= 1) {
      this.price -= parseInt(item.item_price);
    }

  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  
  ok(){
    location.reload();
  }
}
