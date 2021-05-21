import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
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
  price: any = 0;

  customer: any;
  custId: any;

  alNum: number = 0;

  cart: any = [];
  cartItems: any = [];

  gifts: any = [];
  gitfBoxes: any = [];

  numItems: number = 1;

  constructor(private fb: FormBuilder, private os: OrderService, private router: Router, private cs: CustomerService, private as: AdminService) { }

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  ngOnInit(): void {
    //Get Customer
    const custIdJson = localStorage.getItem('id');
    this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;


    const cust_id = { cust_id: this.custId };
    console.log(cust_id);
    this.cs.getCustomer(this.custId).subscribe((data: any) => {
      this.customer = data[0];
      console.log(data);
    }, error => console.log(error));


    //Get Items From LocalStorage
    /* 
     for (let i of this.items) {
       i.numItems = 1;
       this.price += parseInt(i.item_price);
       console.log(this.price);
     } 
     console.log(this.items);*/

    //Get Items from cart
    this.cs.viewCart(this.custId).subscribe((data: any) => {
      this.cart = data.data;
      console.log(data.data);

      for (let c of this.cart) {
        this.cartItems.push(c);
      }

    }, error => console.log(error));
    console.log(this.cartItems);

    //get all items
    this.as.viewItems().subscribe((data: any) => {
      console.log(data);

      this.gifts = data;

      for (let g of this.gifts) {
        for (let c of this.cartItems) {
          if (c.title == g.title) {

            const gB = {
              cust_id: this.custId, category: g.category, image: g.image, item_description: g.item_descri,
              item_price: g.item_price, size: g.size, title: g.title, numItems: this.numItems, availItems: g.avail_item,
              cart_id: c.cart_id, item_id: g.item_id
            }
            this.gitfBoxes.push(gB);

            this.price += parseInt(g.item_price);
            console.log(this.price);
          }
        }
      }
    });
    //items
    console.log(this.gitfBoxes);

  }

  //Remove Item from the selected items
  priceToDelete: number = 0;
  onDelete(deletItm: any, itmPrice: number, titl: any, numItems: any) {
    this.gitfBoxes.splice(deletItm, 1);
    this.priceToDelete = itmPrice * numItems;
    console.log(this.priceToDelete);
    this.price -= this.priceToDelete;
    console.log(this.price);

    this.cs.deleteFromCart(deletItm).subscribe();
    for (let item of this.gitfBoxes) {
      if (titl == item.title) {
        item.numItems--;
        console.log(item);
      }
    }

    console.log(this.gitfBoxes.length);
    console.log(this.gitfBoxes);

    location.reload()
  }

  //Cancel Order
  cancelOrder() {
    this.gitfBoxes = [];
    console.log(this.items);
    this.price = 0;

    for (let g of this.gitfBoxes) {
      this.cs.deleteFromCart(g.cart_id).subscribe();
    }

    this.router.navigate(['']);
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
    console.log("Three has been pressed");
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
  }

  subtract: number = 0;

  onBillingFormSubmit() {
    console.log("**** Billing Form");
    console.log(this.billingForm.value);
    document.getElementById("cirle3")!.style.backgroundColor = "rgb(40, 207, 40)";

    for (let item of this.gitfBoxes) {


      const order = {
        cust_id: localStorage.getItem('id'), item_title: item.title, quantity: item.numItems, totalPrice: item.item_price
        , phoneNumber: this.shippingForm.value.phoneNumber, name: this.shippingForm.value.name,
        citySuburb: this.shippingForm.value.citySuburb, postalCode: this.shippingForm.value.postalCode,
        province: this.shippingForm.value.province, streetAddress: this.shippingForm.value.streetAddress
      }
      console.log(this.shippingForm.value.streetAddress);
      console.log("call api")

      this.os.sendOrder(order).subscribe((data) => console.log(data), ERR => console.log(ERR));
 
      console.log(item.availItems);
      this.subtract = Number(item.availItems) - Number(item.numItems);
      item.availItems=this.subtract.toString();
      console.log(this.subtract);
    }
    this.alNum = 1;

   for (let i of this.gitfBoxes) {
     const details = {item_id:i.item_id, avail_item:i.availItems}
     console.log(i.availItems)
     this.cs.updateItemQuantity(details)
        .subscribe(data => console.log(data), error => console.log(error));
    }

    for (let g of this.gitfBoxes) {
      this.cs.deleteFromCart(g.cart_id).subscribe();
    }
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
   /* console.log("Three has been pressed");
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;*/
  }

  subt(itemId: any, item: any) {

    //item.availItems--;
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
    item.numItems = parseInt(item.numItems);
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
    for (let g of this.gitfBoxes) {
      this.cs.deleteFromCart(g.cart_id).subscribe();
    }
  }

  message: string = '';
  ok() {
    //location.reload();
    this.router.navigate(['/order']);
  }
}
