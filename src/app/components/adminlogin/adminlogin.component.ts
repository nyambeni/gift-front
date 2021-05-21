import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../services/admin.service";
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  constructor(private as: AdminService, private fb: FormBuilder, private router: Router) { }

  isLoginError: boolean = false;
  fieldTextType = false;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  })

  ngOnInit(): void {
   // localStorage.clear();
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.as.adminLogin(this.loginForm.value)
      .subscribe((user: any) => {

        localStorage.setItem('adminId', user.user.admin_id.toString());
        console.log(user);
        this.router.navigate(['/statisticbox']);
      }
        , (error: any) => {
          console.log(error);
          this.isLoginError = true
        });
  }

}
