import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Countries=[{"code":"IN","name":"India"},{"code":"US","name":"United States"}];
  register={

  }
 registerUser(){
   console.log(this.register);
 }
 submitForm(form:any){
   console.log(form);
 }
}
