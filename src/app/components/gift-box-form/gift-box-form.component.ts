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
    price: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    validationImage: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,private as: AdminService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value

    this.as.sendGiftBox(this.giftBoxForm.value)
    .subscribe(data => console.log(data), error => console.log(error));
  }
  

}
