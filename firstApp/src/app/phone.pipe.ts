import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    if(args=="US"){
      return "+1 "+value.substring(0,3)+"-"+value.substring(3,6)+"-"+value.substring(6,10);
    }
    if(args=="IN"){
    return "+91 "+value.substring(0,5)+"-"+value.substring(5,10);
    }
    return null;
  }

}

   
