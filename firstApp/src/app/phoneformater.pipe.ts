import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformater'
})
export class PhoneformaterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value.toString().substring(0,3));
    console.log(args);
    if(args=="US"){
      return "+1 "+value.toString().substring(0,3)+"-"+value.toString().substring(3,6)+"-"+value.toString().substring(6,10);
    }
    if(args=="IN"){
      return "+91 "+value.toString().substring(0,5)+"-"+value.toString().substring(5,10);
    }
    return null;
  }

}
