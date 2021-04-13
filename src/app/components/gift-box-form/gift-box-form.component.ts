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

  selectedFile:any = null;
  
  fd = new FormData();

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);

    reader.onload=(ev:any)=>{
    console.log("Show me the file");

     this.fd.append('picture', this.selectedFile);
      this.fd.append('title', this.giftBoxForm.value.title); 
      this.fd.append('category',this.giftBoxForm.value.category);
      this.fd.append('size', this.giftBoxForm.value.size);
      this.fd.append('price', this.giftBoxForm.value.price);
      this.fd.append('quality', this.giftBoxForm.value.quality);
      this.fd.append('description', 'description');
 
    }
  }
    
  onSubmit() {

    this.as.sendGiftBox(this.fd)
    .subscribe(data => console.log(data), error => console.log(error));

  }
  

}
