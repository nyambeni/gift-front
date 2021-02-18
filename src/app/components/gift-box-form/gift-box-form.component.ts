import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gift-box-form',
  templateUrl: './gift-box-form.component.html',
  styleUrls: ['./gift-box-form.component.scss']
})
export class GiftBoxFormComponent implements OnInit {

  selectedFile = null; 

  categories = [ "Birthday", "Wedding", "Graduation", "Baby Shower", "Christmas", "Valentine"];
  giftBoxForm = this.fb.group({
    title: ['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    category: ['', Validators.required],
    size: ['', Validators.required],
    price: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get title() { return this.giftBoxForm.get('title') }

  get price () { return this.giftBoxForm.get('price') }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
   console.log(this.selectedFile);
    console.log(event);
  }

  onUpload(){

  }

  onSubmit() {
    console.warn(this.giftBoxForm.value);
  }
}
