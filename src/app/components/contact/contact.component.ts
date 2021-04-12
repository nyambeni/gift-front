import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';


import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder,) { }

  formContact = this.fb.group({

    fname: ['', [Validators.required, Validators.minLength(3),]],
    lname: ['', [Validators.required, Validators.minLength(3),]],
    email: ['', [Validators.required, Validators.minLength(3),]],
    subject: ['', [Validators.required, Validators.minLength(3),]],
    message: ['', [Validators.required, Validators.minLength(3),]],

  });


  ngOnInit(): void {
  }

  get fname() {
    return this.formContact.get('fname');
  }

  get lname() {
    return this.formContact.get('lname');
  }

  get email() {
    return this.formContact.get('email');
  }

  get subject() {
    return this.formContact.get('subject');
  }

  get message() {
    return this.formContact.get('message');
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn")!.style.display = "block";
    } else {
      document.getElementById("myBtn")!.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})

  }



  onSubmit() {

    console.log(this.formContact.value);

  }


}
