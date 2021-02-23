import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    emailAddress: [''],
    password: [''],
  })

  constructor(private fb: FormBuilder, private cs: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cs.logIn(this.loginForm.value)
    .subscribe((response:any) => console.log(response.user),
    error => console.log("error"));
  }

}
HTTPS://AWS.AMAZON.COM/EDUCATION/AWSEDUCATE/CONTACT-US