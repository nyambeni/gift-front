import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

import { passwordMatchValidator } from '../../validation/passwordMatchValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isEmailError = false;

  // don't forget to look for this struck through
  customerForm = this.fb.group({ 
    firstname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]],
    confirmPassword: ['',  Validators.required]
  },{validator: passwordMatchValidator}) 

  constructor(private fb: FormBuilder, private customerService: CustomerService,
    private router: Router) { }

  get firstname() { return this.customerForm.get('firstname')}

  get lastname() { return this.customerForm.get('lastname')}

  get emailAddress() { return this.customerForm.get('emailAddress')}

  get password() { return this.customerForm.get('password')}

  get confirmPassword() { return this.customerForm.get('confirmPassword')}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.customerForm.value); 
    this.customerService.addCustomer(this.customerForm.value).
    subscribe((data) => {
        console.log(data);

        const user = {
          password: this.customerForm.value.password,
          emailAddress: this.customerForm.value.emailAddress
        }
       
        this.customerService.logIn(user)
        .subscribe((user:any) => {
            console.log(user.user);
            console.log(user.user.cust_id.toString());

            localStorage.setItem('id', user.user.cust_id.toString());
            this.router.navigate(['/shop']);
        });

      },(error) => {
        console.log(error);
        this.isEmailError = true;
      });

      ///

    }
}
