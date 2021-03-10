import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-view-box',
  templateUrl: './view-box.component.html',
  styleUrls: ['./view-box.component.scss']
})
export class ViewBoxComponent implements OnInit {

  constructor(private as: AdminService) { }

  customer:any=[];

  ngOnInit(): void {
  
  }

  elements: any = [
    {id: 'Marry Marry', first: 'Wedding', last: 'Large', handle: '600'},
    {id: 'Pink Happiness', first: 'Birthday', last: 'Small', handle: '200'},
    {id: 'Real Power', first: 'Graduation', last: 'Small', handle: '210'},
    { id: "Cloth Work", first: "Birthday", handle: 150, numItems: 0, wish:0, availItems: 5, last: "Medium Size Box.", },
    { id: "Super Green", first: "Graduation", handle: 120, last: "Medium/Large Size Box, comes in camo green.", },//can also be for birthday
    { id: "Lightin' Pink", first: "Birthday", handle: 100, last: "Medium Size Box, with a pink color and light pink stripes.",  },//can also be for birthday and valentin
    { id: "Silver Scotch", first: "Christmas", handle: 150, last: "Medium Size Box, with silver scotch pattern.", },
    { id: "Brownie", first: "Christmas", handle: 80, last: "Small Size Box, covered with brown color.",},
    { id: "Green Bow", first: "Christmas", handle: 100, last: "Medium Size Box, simple box.",  },
    { id: "Red Rosey", first: "Valentine",  last: "XS Size Boxes, they come as a set.",  },//can also be for christmas
    { id: "Merry Merry", first: "Christmas", last: "XS Size Box, only comes in white and with a green and white string.",  },
    { id: "Boxey White", first: "Christmas", handle: 70, last: "Small Size Box, with some christmas gold glitter.",  },
    { id: "Star", first: "Birthday", handle: 80, last: "Small Size Box.",  },
    { id: "Purple House", first: "Wedding", handle: 50, last: "XS Size Box, built to look like a house.", },//can aslo be used for birthday
    { id: "Pinkie", first: "Wedding", handle: 120, last: "Small Size Box, pink and white stripe box.",},//can aslo be used for valentine/birthday/
    { id: "Proud Merry", first: "Christmas", handle: 150, last: "Large Size Box, comes wrapped in a brown cover with a red string.",  },
    { id: "Yellow Bow", first: "Birthday", handle: 150, last: "Medium Size Box, Comes with a one of a kind yellow bow.",  },//can aslo be used for christmas
    { id: "Summer Loving", first: "Valentine", handle: 130, last: "Medium Size Box, Comes in a heart shaped box.", },//can aslo be used for birthday/wedding
    { id: "Brown Merry", first: "Christmas", handle: 200, last: "Large Size Box, brown box with a red bow.", },//can aslo be used for valentine
    { id: "Bronie and Red", first: "Wedding", handle: 80, last: "Small Size Box.", },//can aslo be used for valentine/ christmas
    { id: "Pink Happiness", first: "Baby Shower", handle: 100, last: "Small Size Box, Comes an octagon shape.",  },//can aslo be used for valentine/birthday
    { id: "Red", first: "Christmas", handle: 50, last: "XS Size Box, comes in red color.",  },//can aslo be used for valentine/ christmas
    { id: "Blue, Purple & Pink", first: "Baby Shower", handle: 100, availItems: 15, last: "XS Size Boxes, they come as a set.", },
    { id: "Red Cross & Bow", first: "Valentine", handle: 80, last: "XS Size Box, comes in brown and a red bow.",  },//can aslo be used for Birthday/ christmas
    { id: "The Reddies", first: "Christmas", handle: 100, last: "XXS Size Box, comes in a set.", },//can aslo be used for valentine/ birthday
    { id: "Blue Monday", first: "Graduation", handle: 120, last: "XS Size Box.",  },//can aslo be used for birthday
    { id: "Blackie", first: "Graduation", handle: 80, last: "XS Size Box.", },//can aslo be used for valentine/ birthday
    { id: "Divine", first: "Christmas", handle: 80, last: "Medium Size Box, has some pattern and comes in red."},//can aslo be used for valentine

  ];

  
  items: Array<{ image: string, title: string, category: string, price: number, }> = [
    { image: "assets/GiftBoxes/box1.png", title: "Cloth Work", category: "Birthday", price: 150,  },
    { image: "assets/GiftBoxes/box2.png", title: "Super Green", category: "Graduation", price: 120, },//can also be for birthday
    { image: "assets/GiftBoxes/box3.png", title: "Lightin' Pink", category: "Birthday", price: 100,  },//can also be for birthday and valentin
    { image: "assets/GiftBoxes/box4.png", title: "Silver Scotch", category: "Christmas", price: 150,},
    { image: "assets/GiftBoxes/box5.png", title: "Brownie", category: "Christmas", price: 80,  },
    { image: "assets/GiftBoxes/box6.png", title: "Green Bow", category: "Christmas", price: 100,},
    { image: "assets/GiftBoxes/box7.png", title: "Red Rosey", category: "Valentine", price: 50,  },//can also be for christmas
    { image: "assets/GiftBoxes/box8.png", title: "Merry Merry", category: "Christmas", price: 50, },
    { image: "assets/GiftBoxes/box9.png", title: "Boxey White", category: "Christmas", price: 70,},
    { image: "assets/GiftBoxes/box10.png", title: "Star", category: "Birthday", price: 80,},
    { image: "assets/GiftBoxes/box11.png", title: "Purple House", category: "Wedding", price: 50,},//can aslo be used for birthday
    { image: "assets/GiftBoxes/box12.png", title: "Pinkie", category: "Wedding", price: 120,},//can aslo be used for valentine/birthday/
    { image: "assets/GiftBoxes/box13.png", title: "Proud Merry", category: "Christmas", price: 150,},
    { image: "assets/GiftBoxes/box14.png", title: "Yellow Bow", category: "Birthday", price: 150, },//can aslo be used for christmas
    { image: "assets/GiftBoxes/box15.png", title: "Summer Loving", category: "Valentine", price: 130,},//can aslo be used for birthday/wedding
    { image: "assets/GiftBoxes/box16.png", title: "Brown Merry", category: "Christmas", price: 200, },//can aslo be used for valentine
    { image: "assets/GiftBoxes/box17.png", title: "Bronie and Red", category: "Wedding", price: 80,  },//can aslo be used for valentine/ christmas
    { image: "assets/GiftBoxes/box18.png", title: "Pink Happiness", category: "Baby Shower", price: 100,},//can aslo be used for valentine/birthday
    { image: "assets/GiftBoxes/box19.png", title: "Red", category: "Christmas", price: 50, },//can aslo be used for valentine/ christmas
    { image: "assets/GiftBoxes/box20.png", title: "Blue, Purple & Pink", category: "Baby Shower", price: 100,},{ image: "assets/GiftBoxes/box21.png", title: "Red Cross & Bow", category: "Valentine", price: 80, },//can aslo be used for Birthday/ christmas
    { image: "assets/GiftBoxes/box22.png", title: "The Reddies", category: "Christmas", price: 100,  },//can aslo be used for valentine/ birthday
    { image: "assets/GiftBoxes/box23.png", title: "Blue Monday", category: "Graduation", price: 120,},//can aslo be used for birthday
    { image: "assets/GiftBoxes/box24.png", title: "Blackie", category: "Graduation", price: 80,  },//can aslo be used for valentine/ birthday
    { image: "assets/GiftBoxes/box25.png", title: "Divine", category: "Christmas", price: 80, },//can aslo be used for valentine
    { image: "assets/GiftBoxes/box25.png", title: "Divine", category: "Christmas", price: 80, },//can aslo be used for valentine

  ]

  headElements = ['Title', 'Category', 'Size', 'Price', 'Action'];
  headI = ['Item','Title', 'Category', 'Price',];

  
  searchL: any = [];
  table: number = 1;
  
  name: any;
  searchName: string = "";

  onSearch(search: any) {

    //Search for by name
    this.name = search.toLowerCase();

    if(search == ""){
      alert("The is no name entered");
    }

    for (let e of this.items) {
      this.searchName = e.title.toLowerCase();
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
    }//end of name

  }
  viewAll() {
    this.table = 1;
    this.searchL = [];
    
  }
  
}
