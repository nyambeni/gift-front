import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginError: boolean = false;

  loginForm = this.fb.group({
    emailAddress: [''],
    password: [''],
  })

  constructor(private fb: FormBuilder, private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    const cust = this.customerService.logIn(this.loginForm.value)
    .subscribe((data) => console.log(data));
   // localStorage.setItem('userToken', cust.token.toString());
    //localStorage.setItem('id', cust.customerId.toString());
    this.router.navigate(['/shop']);

    //this.isLoginError = true; //when getting http error
  }
}
