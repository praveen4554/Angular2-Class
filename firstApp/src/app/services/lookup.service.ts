import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class LookupService {
  Countries={

  }
  constructor(public http:Http) { }
  getCountries(){
    this.Countries=[{"code":"IN","name":"India"},{"code":"US","name":"United States"}];
    return this.Countries;
  }
  getCountriesfromAPi(){
    return this.http.get('app/Api/Countries.json')
    .toPromise()
    .then((response)=> response.json())
    .catch((errorResponse)=>errorResponse.json());
  }

}
