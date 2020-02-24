import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SevirceService } from '../sevirce.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() registerData = {
    id:" ", username:" ", email:" ", contact: " ", password:" ",confirm:" "
  }

  constructor(private _SevirceService: SevirceService,
     private _activatedRouter:ActivatedRoute,
     private _router:Router ) { }

     onBackButtonClick():void{
        this._router.navigate(['/login']);

     }

  details: any = [];

  ngOnInit() {
    this.getRegister();
  }

  getRegister(){
    this._SevirceService.addRegister(this.details).subscribe((data: any) =>
    {
      this.details = data;
      console.log(this.details);
    });
  }

  addReg(){
    this._SevirceService.addRegister(this.registerData).subscribe(
      data =>
        console.log(data));
        console.log(this.registerData.id);
        console.log(this.registerData.username);
        console.log(this.registerData.email);
        console.log(this.registerData.contact);
        console.log(this.registerData.password);
        console.log(this.registerData.confirm);
  }

}


