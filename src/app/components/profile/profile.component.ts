import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  customer: any;

  custId: any;

  constructor(private customerService: CustomerService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    //this.customer = this.customerService.getCustomer(12);
    //console.log(this.customer)
    /*.subscribe( customer => this.customer = customer, 
      error => console.log(`****API error***`)
    );*/

    const custIdJson = localStorage.getItem('id');
    this.custId = custIdJson !== null ? JSON.parse(custIdJson) : null;

   
    const cust_id = { cust_id:this.custId };
    console.log(cust_id);
    this.customerService.getCustomer(this.custId).subscribe((data: any) => {
      this.customer = data[0];
      console.log(data);
    }, error => console.log(error));
    
    //console.log(this.customer);
  }

  updateForm = this.fb.group({
    firstname: [''],
    lastname: ['']
  });

  updateCustomer(name:any, lname:any) {
    

    if(this.updateForm.value.firstname == ""){
      this.updateForm.value.firstname = name;
    }

    if(this.updateForm.value.lastname == ""){
      this.updateForm.value.lastname = lname;
    }
    
    console.log(this.updateForm.value.firstname, this.updateForm.value.lastname);
    this.customerService.updateCustomer(this.updateForm.value)
    .subscribe(data => console.log(data), error => console.log(error));
    console.log(this.updateForm.value);
    this.customer.firstname = this.updateForm.value.firstname;
    this.customer.lastname = this.updateForm.value.lastname;
    console.log('-----');
  }

  deleteAccount() {
    this.customerService.deleteUser(this.custId)
    .subscribe(data => console.log(data), error => console.log(error));
    console.log('Delete Accoutn\\')
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
