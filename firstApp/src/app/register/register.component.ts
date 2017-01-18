import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(rb:FormBuilder) {
    this.registerForm=rb.group({
      'firstName':["Praveen",Validators.maxLength(2)]
    })
   }

  ngOnInit() {
  }
  Countries=[{"code":"IN","name":"India"},{"code":"US","name":"United States"}];
  register={

  }
  registerForm:FormGroup
 registerUser(){
   console.log(this.register);
 }
 submitForm(form:any){
   console.log(form);
 }
}
