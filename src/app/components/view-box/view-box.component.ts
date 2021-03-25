import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-view-box',
  templateUrl: './view-box.component.html',
  styleUrls: ['./view-box.component.scss']
})
export class ViewBoxComponent implements OnInit {

  constructor(private as: AdminService, private fb: FormBuilder) { }

  gifts: any = [];

  gitfBoxes: any = [];
  image: string = '';

  updateForm = this.fb.group({
    firstname: [''],
    lastname: ['']
  });
  ngOnInit(): void {
    //Get all the items
    this.as.viewItems().subscribe(data => {
      console.log(data);

      this.gifts = data;

      for (let c of this.gifts) {
        this.image = "assets/GiftBoxes/" + c.image + ".png";
        c.image = this.image;
        this.gitfBoxes.push(c);
      }

    });
    console.log(this.gitfBoxes);

  }

  headElements = ['Title', 'Category', 'Size', 'Price', 'Action'];
  headI = ['Item', 'Title', 'Category', 'Price',];


  searchL: any = [];
  table: number = 1;

  name: any;
  searchName: string = "";


  onSearch(search: any) {

    //Search for by name
    this.name = search.toLowerCase();

    if (search == "") {
      alert("The is no name entered");
    }



    for (let e of this.gitfBoxes) {
      this.searchName = (e.title ? e.title : '').toLowerCase();

      if (this.searchName == this.name) {

        this.searchL.push(e);

      }
    }

    this.name = search.toLowerCase().split(" ");
    for (let i = 0; i < this.name.length; i++) {
      this.name[i] = this.name[i][0].toUpperCase() + this.name[i].slice(1);
    }
    this.name.join(" ");

    if (this.searchL == "") {
      this.table = 1;
    } else {
      this.table = 2;
    }//end of name


    //Search for by category
    this.name = search.toLowerCase();

    for (let e of this.gitfBoxes) {
      this.searchName = (e.category ? e.category : '').toLowerCase();
      if (this.searchName == this.name) {

        this.searchL.push(e);

      }
    }

    this.name = search.toLowerCase().split(" ");
    for (let i = 0; i < this.name.length; i++) {
      this.name[i] = this.name[i][0].toUpperCase() + this.name[i].slice(1);
    }
    this.name.join(" ");

    if (this.searchL == "") {
      alert(this.name + " does not exists in the table");
      this.table = 1;
    } else {
      this.table = 2;
    }//end of category
    console.log(this.searchL);
  }

  //View All boxes
  view: number = 0;
  viewAll() {
    this.table = 1;
    this.searchL = [];
  }

  //Delete a box
  deleteBox(boxID: any, itemId: any) {
    this.gitfBoxes.splice(boxID, 1);
    console.log(itemId);
    this.as.deleteGiftBox(itemId).subscribe();
  }
  //End of delete box

  //Update a box
  update: boolean = false;
  theId: any;
  viewUpdate(itemID: any) {
    this.update = true;
    this.theId = itemID;
  }

  title: any;
  category: any;
  size: any;
  price: any;
  updateItem(item: any, itemID: any, title: any, category: any, size: any, price: any) {

      if (title == "") {
        this.title = item.title;
      }else{
        this.title=title;
      }
      if (category == "") {
        this.category = item.category;
      }else{
        this.category=category;
      }
      if (size == "") {
        this.size = item.size;
      }else{
        this.size=size;
      }
      if (price == "") {
        this.price = item.item_price;
      }else{
        this.price=price;
      }

    const data = { item_id: itemID, title: this.title, category: this.category, item_price: this.price };
    console.log(data);
    this.update = false;
  }
}