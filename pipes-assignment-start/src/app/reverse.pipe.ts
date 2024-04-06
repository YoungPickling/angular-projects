import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(str: string): any {
    if (str.length === 0 || str === '') {
      return str;
    }
    let resultString = '';
    for(let i = str.length - 1; i >= 0 ; i--) {
      resultString += str[i];
    }
    return resultString
  }
}