import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  //items: any;

  i: number = 0;
  itm: string = "";

  cart: any = [];
  cartItems: any = [];

  add: any = [];

  constructor(private cs: CustomerService, private router: Router, private as: AdminService) { }

  num: number = 0;
  numItems: number = 0;
  item: any = [];

  items: any = [];
  selectI: number = 0
  //availItems: number = 10;
  custName = '';
  custId: any;
  gifts: any = [];

  gitfBoxes: any = [];
  wishlist: any = [];

  cartError:any='';

  ngOnInit(): void {


    const custIdJson = localStorage.getItem('id');
    this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;

    //this.custId = "112";
    console.log(this.custId);

    if (this.custId == null) {
      this.router.navigate(['/login']);
    } else {
      this.cs.viewWishList(this.custId).subscribe((data: any) => {
        console.log(data);

        this.item = data;
        console.log(this.item);

        for (let i of this.item) {
          const gB = {
            wish_id: i.wish_id, cust_id: i.cust_id,
             item_id: i.wish_id, category: i.category, image: i.image, 
             item_descri: i.item_description, item_price: i.item_price, size: i.size,
              title: i.item_title, numItems: this.numItems, selectI: this.selectI, availItems: i.availItems
          }
          this.items.push(gB);
        }


      });

      this.cs.getCustomer(this.custId).subscribe((data: any) => {
        this.custName = data[0]?.firstname;
        console.log(data[0]);
      }, error => console.log(error));

      console.log(this.items);

      if (this.items == null) {
        this.num = 1;
      }


      //Get All The Items
      this.as.viewItems().subscribe((data: any) => {
        console.log(data);

        this.gifts = data;

        for (let c of this.gifts) {
          const gB = {
            item_id: c.item_id, category: c.category, image: c.image, item_descri: c.item_descri,
            item_price: c.item_price, size: c.size, title: c.title, numItems: this.numItems,
            selectI: this.selectI, availItems: c.avail_item
          }

          this.gitfBoxes.push(gB);
          
        }
      });
      console.log(this.gitfBoxes);
      console.log(this.items);
 
      

      console.log(this.wishlist);

      //Get Items from cart
    this.cs.viewCart(this.custId).subscribe((data: any) => {
      this.cart = data.data;
      console.log(data.data);

      if (this.cart == '') {
        this.itm = "0";
    
      }
      for (let c of this.cart) {
        this.cartItems.push(c);
        this.i += 1;
        this.itm = this.i.toString();
       
      }

    }, error => console.log(error));
    console.log(this.cartItems);
      
    }
  }


  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn")!.style.display = "block";
    } else {
      document.getElementById("myBtn")!.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })

  }

  //items in the card
  incNum: number = 0;
  price: number = 0;

available:any;
  addToCart(item: any, idItm: any) {

    const custIdJson = localStorage.getItem('id');
    this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;


    if (item.selectI == 0) {

      this.i += 1;
      this.itm = this.i.toString();
      for (let i of this.gitfBoxes) {
        if(item.title == i.title){
          item.availItems = i.availItems;
        }
      
      }

      /*this.incNum = 1;
      item.selectI = 1;
      const AddItem = { cust_id: this.custId, image: item.image, item_title: item.title, category: item.category,
         item_price: item.item_price, item_description: item.item_descri, size: item.size, availItems: item.availItems }
      this.add.push(AddItem);*/

      const addCart = {
        title: item.title, price: item.item_price, cust_id: this.custId, description: item.item_descri, size: item.size,
        images: item.image
      };

      this.cs.addToCart(addCart).
      subscribe((data: any) => {
        this.cartError = data
      });


    }

    this.price += item.price;

    localStorage.setItem('price', JSON.stringify(this.price));

    localStorage.setItem('items', JSON.stringify(this.add));
    console.log(this.add);
  }


  removeFromList(deletItm: any, id: any) {
    this.items.splice(id, 1);
    this.cs.deleteWish(deletItm).subscribe();
  }

  logOut() {
    localStorage.clear();
    for (let g of this.gitfBoxes) {
      this.cs.deleteFromCart(g.cart_id).subscribe();
    }
    this.router.navigate(['']);
  }

}
