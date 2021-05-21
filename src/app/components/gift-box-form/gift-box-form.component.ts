import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-gift-box-form',
  templateUrl: './gift-box-form.component.html',
  styleUrls: ['./gift-box-form.component.scss']
})
export class GiftBoxFormComponent implements OnInit {

  categories = [ "Birthday", "Wedding", "Graduation", "Baby Shower", "Christmas", "Valentine"];
  giftBoxForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', [Validators.required]],
    size: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    quantity: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    validationImage: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

 

  constructor(private fb: FormBuilder,private as: AdminService) { }

  ngOnInit(): void {
  }

  get title() { return this.giftBoxForm.get('title')}

  get category() { return this.giftBoxForm.get('category')}

  get size() { return this.giftBoxForm.get('size')}

  get price() { return this.giftBoxForm.get('price')}

  get quantity() { return this.giftBoxForm.get('quantity')}

  get description() { return this.giftBoxForm.get('description')}

  get validationImage() { return this.giftBoxForm.get('validationImage')}


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
      this.fd.append('quantity', this.giftBoxForm.value.quantity);
      this.fd.append('description', this.giftBoxForm.value.description);
 
    }
  }
    
  onSubmit() {

    this.as.sendGiftBox(this.fd)
    .subscribe(data => console.log(data), error => console.log(error));
    

   
  }
  
  ok(){
    location.reload();
  }
}
