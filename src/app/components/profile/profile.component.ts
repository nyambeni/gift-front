import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  customer: any = [];

  constructor(private customerService: CustomerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customer = this.customerService.getCustomer(12);
    console.log(this.customer)
    /*.subscribe( customer => this.customer = customer, 
      error => console.log(`****API error***`)
    );*/
  }

  updateForm = this.fb.group({
    firstname: [''],
    lastname: ['']
  });

  updateCustomer(){
    this.customerService.updateCustomer(this.updateForm.value).subscribe();
    console.log("Submit");
    this.customer.firstname = this.updateForm.value.firstname;
    this.customer.lastname = this.updateForm.value.lastname;
    console.log('-----');
  }

  btnCancel(){
    console.log("Cancel has been pressed");
    this.customer.firstname = this.customer.firstname;
    this.customer.lastname;
  }

  logOut(){
    console.log("log user out");
  }
}
