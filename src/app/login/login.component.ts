
 /*


import { Component, OnInit, Input } from '@angular/core';
import { SevirceService } from './../sevirce.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  @Input() loginData = {
    
    Username:" ",password:" "
  }

  constructor(private _SevirceService: SevirceService,
              private _activatedRoute:ActivatedRoute,
               private _router:Router,
               private _formBuider: FormBuilder) { }

  

  registerClick():void{
    this._router.navigate(['/register'])
  }

  users: any =[];

  ngOnInit(): void {

    this.registerForm = this._formBuider.group({
      Username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

    this.login();

  }

  get f() { return this.registerForm.controls; }

  submitLogin(): void{
    this._router.navigate(['/placeOrder'])
    
  }

  login()
  {
    this._SevirceService.login(this.login).subscribe((data: any) =>
    {this.users = data;
      console.log(this.users);
    });
    
  }

loginDetails()
{
  this._SevirceService.login(this.loginData).subscribe(
    data =>
    console.log(data));
    console.log(this.loginData.Username);
    console.log(this.loginData.password);
}

}


 

  */


  
  import { Component, OnInit, Input, ApplicationInitStatus } from '@angular/core';
  import { SevirceService } from './../sevirce.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

// @Input()logINUserData={
//  this.loginForm.value.username,
//   password: "",

// }


loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


  
  constructor(private _SevirceService: SevirceService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { 

        
            }
  ngOnInit() {
this.loginForm = this.formBuilder.group({
  username:['',[Validators.required]],
  password:[' ']
})
    
  }

  

loginUser()
{
  this.submitted = true;

  if (this.loginForm.invalid) {
    return;
}




  this._SevirceService.login(this.loginForm.value.username).subscribe(
    Response=>{
    if(Response.type == 200)
    {
      this._router.navigate(['/order']);
    }else{
      this._router.navigate(['/login']);
      this.loading = false;
    }

    console.log(Response.type)},
    err=>{console.error(err);})

}

}




