import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {LookupService} from '../services/lookup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(rb:FormBuilder,public lookupService:LookupService) {
    this.registerForm=rb.group({
      'firstName':["Praveen",Validators.maxLength(2)]
    })
    //this.Countries=lookupService.getCountries();
   }
  
  Countries:Array<any>;
  ngOnInit() {
    this.lookupService.getCountriesfromAPi().then(response=>{
      this.Countries=response.countries;
    console.log(this.Countries)});
  }
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
