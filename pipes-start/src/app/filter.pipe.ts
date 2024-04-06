import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // might lead to performance issues, but without it, if you add an element while list is filtered, new elements wont be displayed, until filter updates
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    for (const item of value) {
      const resultArray = [];
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
      return resultArray;
    }
  }
}
