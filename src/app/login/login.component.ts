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

  @Input() loginData = {
    
    Username:" ",password:" "
  }

  constructor(private _SevirceService: SevirceService,
              private _activatedRoute:ActivatedRoute,
               private _router:Router) { }

  submitLogin(): void{
    this._router.navigate(['/order'])
  }

  registerClick():void{
    this._router.navigate(['/register'])
  }

  users: any =[];

  ngOnInit(): void {
    this.login();
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
/*

loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


  
  constructor(private userService:UserService,
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
  
  this.userService.AdminLogIn(this.loginForm.value.username, this.loginForm.value.password).subscribe(
    Response=>{
    if(Response.code == 200)
    {
      this._router.navigate(['/admin-dashboard']);
    }else{
      this._router.navigate(['/admin-signin']);
      this.loading = false;
    }

    console.log(Response.code)},
    err=>{console.error(err);})


    
}

}
*/