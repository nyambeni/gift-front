import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shoplanding',
  templateUrl: './shoplanding.component.html',
  styleUrls: ['./shoplanding.component.scss']
})
export class ShoplandingComponent implements OnInit {


  items: Array<{ image: string, title: string, category: string, price: number }> = [
    { image: "assets/GiftBoxes/box1.png", title: "Cloth Work", category: "Birthday", price: 250 },
    { image: "assets/GiftBoxes/box2.png", title: "Super Green", category: "Graduation", price: 300 },//can also be for birthday
    { image: "assets/GiftBoxes/box3.png", title: "Lightin' Pink", category: "Birthday", price: 500 },//can also be for birthday and valentin
    { image: "assets/GiftBoxes/box4.png", title: "Silver Scotch", category: "Christmas", price: 250 },
    { image: "assets/GiftBoxes/box5.png", title: "Brownie", category: "Christmas", price: 300 },
    { image: "assets/GiftBoxes/box6.png", title: "Green Bow", category: "Christmas", price: 500 },
    { image: "assets/GiftBoxes/box7.png", title: "Red Rosey", category: "Valentine", price: 250 },//can also be for christmas
    { image: "assets/GiftBoxes/box8.png", title: "Merry Merry", category: "Christmas", price: 300 },
    { image: "assets/GiftBoxes/box9.png", title: "Boxey White", category: "Christmas", price: 500 },
    { image: "assets/GiftBoxes/box10.png", title: "Star", category: "Birthday", price: 250 },
    { image: "assets/GiftBoxes/box11.png", title: "Purple House", category: "Wedding", price: 300 },//can aslo be used for birthday
    { image: "assets/GiftBoxes/box12.png", title: "Pinkie", category: "Wedding", price: 500 },//can aslo be used for valentine/birthday/
    { image: "assets/GiftBoxes/box13.png", title: "Proud Merry", category: "Christmas", price: 250 },
    { image: "assets/GiftBoxes/box14.png", title: "Yellow Bow", category: "Birthday", price: 300 },//can aslo be used for christmas
    { image: "assets/GiftBoxes/box15.png", title: "Summer Loving", category: "Valentine", price: 500 },//can aslo be used for birthday/wedding
    { image: "assets/GiftBoxes/box16.png", title: "Brown Merry", category: "Christmas", price: 250 },//can aslo be used for valentine
    { image: "assets/GiftBoxes/box17.png", title: "Bronie and Red", category: "Wedding", price: 300 },//can aslo be used for valentine/ christmas
    { image: "assets/GiftBoxes/box18.png", title: "Pink Happiness", category: "Baby Shower", price: 500 },//can aslo be used for valentine/birthday
    { image: "assets/GiftBoxes/box19.png", title: "Red", category: "Christmas", price: 250 },//can aslo be used for valentine/ christmas
    { image: "assets/GiftBoxes/box20.png", title: "Blue, Purple & Pink", category: "Baby Shower", price: 300 },
    { image: "assets/GiftBoxes/box21.png", title: "Red Cross & Bow", category: "Valentine", price: 500 },//can aslo be used for Birthday/ christmas
    { image: "assets/GiftBoxes/box22.png", title: "The Reddies", category: "Christmas", price: 250 },//can aslo be used for valentine/ birthday
    { image: "assets/GiftBoxes/box23.png", title: "Blue Monday", category: "Graduation", price: 300 },//can aslo be used for birthday
    { image: "assets/GiftBoxes/box24.png", title: "Blackie", category: "Graduation", price: 500 },//can aslo be used for valentine/ birthday
    { image: "assets/GiftBoxes/box25.png", title: "Divine", category: "Christmas", price: 250 },//can aslo be used for valentine

  ]

  add: Array<{ image: string, title: string, category: string, price: number }> = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    /*if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }*/
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  bottomFunction() {
    document.body.scrollTop = 10000; // For Safari
    document.documentElement.scrollTop = 10000; // For Chrome, Firefox, IE and Opera
  }

  homeFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  /*
    total: number = 0;
    message: string = "R" + this.total.toString();
    i: number = 0;
    itm: string = "";
  
  
    plus(item: any, idItm: any) {
      item.numItems++;
      this.total += item.price;
      this.message = "R" + this.total.toString();
      this.i += 1;
      this.itm = this.i.toString();
      localStorage.setItem('price', JSON.stringify(this.total));
      localStorage.setItem('item', JSON.stringify(item));
  
      console.log(this.add);
  
      if (item.title == "Poler Neck" && item.numItems > 0) {
       /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
      
        this.add.push(item);
      }
  
      if (item.title == "Yellow Stipped Tie" && item.numItems > 0) {
      /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
        this.add.push(item);
      }
  
      if (item.title == "Summer Short" && item.numItems > 0) {
       /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
        this.add.push(item);
      }
  
      if (item.title == "Round Neck Jersey" && item.numItems > 0) {
       /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
        this.add.push(item);
      }
  
      if (item.title == "Purple Shirt" && item.numItems > 0) {
        /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
        this.add.push(item);
      }
  
      if (item.title == "Red Tie & Broucher" && item.numItems > 0) {
      /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
        this.add.push(item);
      }
  
      if (item.title == "Baggy T-Shirt" && item.numItems > 0) {
        /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
        this.add.push(item);
      }
  
      if (item.title == "Trench Coat" && item.numItems > 0) {
       /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
        this.add.push(item);
      }
  
      if (item.title == "Bad Boy Leather Jacket" && item.numItems > 0) {
        /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
        this.add.push(item);
  
      }
  
      if (item.title == "T-Shirt & Shorts" && item.numItems > 0) {
       /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
        this.add.push(item);
      }
  
      if (item.title == "Floral Shirt" && item.numItems > 0) {
      /*for (let it of this.add) {
          for (let a of this.add) {
            if (it.title == a.title) {
              this.add.splice(idItm, 1);
            }
          }
        }*
  
        this.add.push(item);
      }
  
      localStorage.setItem('items', JSON.stringify(this.add));
      console.log(this.add);
  
      console.log(this.total);
  
    }
  
    minus(item: any, idItm: any) {
      item.numItems--;
      this.total -= item.price;
      this.message = "R" + this.total.toString();
      this.i -= 1;
      this.itm = this.i.toString();
      localStorage.setItem('price', JSON.stringify(this.total));
      localStorage.setItem('item', JSON.stringify(item));
      console.log(item);
      console.log(this.total);
  
      if (item.title == "Poler Neck" && item.numItems >= 0) {
  
        this.add.splice(idItm, 1);
  
      }
  
      if (item.title == "Yellow Stipped Tie" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
  
      }
  
      if (item.title == "Summer Short" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
      }
  
      if (item.title == "Round Neck Jersey" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
      }
      if (item.title == "Purple Shirt" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
      }
  
      if (item.title == "Red Tie & Broucher" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
      }
  
      if (item.title == "Baggy T-Shirt" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
      }
  
      if (item.title == "Trench Coat" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
      }
  
      if (item.title == "Bad Boy Leather Jacket" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
      }
  
      if (item.title == "T-Shirt & Shorts" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
      }
  
      if (item.title == "Floral Shirt" && item.numItems >= 0) {
        this.add.splice(idItm, 1);
      }
  
      console.log(this.add);
      localStorage.setItem('items', JSON.stringify(this.add));
  
  
      console.log(this.add);
    }
  
  */

  bday: Array<{ image: string, title: string, category: string, price: number }> = [];
  wed: Array<{ image: string, title: string, category: string, price: number }> = [];
  bShower: Array<{ image: string, title: string, category: string, price: number }> = [];
  cMas: Array<{ image: string, title: string, category: string, price: number }> = [];
  valen: Array<{ image: string, title: string, category: string, price: number }> = [];
  grad: Array<{ image: string, title: string, category: string, price: number }> = [];
  num: number = 0;
  times: number = 1;
  //categories
  birthday() {

    if (this.times == 2) {
      this.times = 1;

      this.bday = [];
    }
    for (let item of this.items) {
      if (item.category == "Birthday" && this.times == 1)
        this.bday.push(item);

    }
    this.times = 2;
    this.num = 1;
    console.log(this.bday);
  }

  wedding() {


    if (this.times == 2) {
      this.times = 1;
      
    this.wed =[];
    
    }
    for (let item of this.items) {
      if (item.category == "Wedding" && this.times == 1)
        this.wed.push(item);
    }
    this.times = 2;
    this.num = 2;
    console.log(this.wed);
  }

  babyShower() {
    if (this.times == 2) {
      this.times = 1;
      this.bShower =[];
    
    }
    for (let item of this.items) {
      if (item.category == "Baby Shower" && this.times == 1)
        this.bShower.push(item);
    }
    this.times = 2;
    this.num = 3;
    console.log(this.bShower);
  }

  christmas() {
    if (this.times == 2) {
      this.times = 1;
      this.cMas =[];
    
    }
    for (let item of this.items) {
      if (item.category == "Christmas" && this.times == 1)
        this.cMas.push(item);
    }
    this.times = 2;
    this.num = 4;
    console.log(this.cMas);
  }

  valentine() {
    if (this.times == 2) {
      this.times = 1;
      this.valen =[];
    
    }
    for (let item of this.items) {
      if (item.category == "Valentine" && this.times == 1)
        this.valen.push(item);
    }
    this.times = 2;
    this.num = 5;
    console.log(this.valen);
  }

  gradution() {
    if (this.times == 2) {
      this.times = 1;
      this.grad =[];
    }
    for (let item of this.items) {
      if (item.category == "Graduation" && this.times == 1)
        this.grad.push(item);
    }
    this.times = 2;
    this.num = 6;
    console.log(this.grad);
  }

  all() {
    if (this.times == 2) {
      this.times = 1;
      this.bday = [];
      this.wed = [];
      this.bShower = [];
      this.valen = [];
      this.grad = [];
      this.cMas = [];
    }
    this.num = 0;
  }
}

