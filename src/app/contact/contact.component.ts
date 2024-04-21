import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { createEmailDomainValidator } from './invalidEmailDomain';

const hosts = ["gmail.com", "hotmail.com"]
const invalidEmailDomain = createEmailDomainValidator(hosts)  // Custom validator

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  
  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email, invalidEmailDomain]),
    message: new FormControl("", [Validators.required,  Validators.minLength(10)])
  })

  submitForm(){
    /*
      - .dirty: true if value changed
      - prestine:  true  if value not changed
      - mark[X] .... 
    */
      if(this.contactForm.valid){
         console.log(this.contactForm.value)
      }
  }
}
