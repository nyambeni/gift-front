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

  isLoginError = false;
  fieldTextType = false;

  loginForm = this.fb.group({
    emailAddress: [''],
    password: [''],
  })

  constructor(private fb: FormBuilder, private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  
  onSubmit(){
    console.log(this.loginForm.value);
    this.customerService.logIn(this.loginForm.value)
    .subscribe(
      (user:any) => {
        console.log(user.user);
        console.log(user.user.cust_id.toString());
        
        localStorage.setItem('id', user.user.cust_id.toString());
        localStorage.setItem('custName', user.user.firstname.toString());
        this.router.navigate(['/shop']);
      }
      ,(error: any) => {
        console.log(error);
        this.isLoginError = true});
      }
}
