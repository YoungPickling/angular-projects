import { Pipe, PipeTransform } from '@angular/core';

interface Server {
    instanceType: string,
    name: string,
    status: string,
    started: Date
}
@Pipe({
  name: 'sort',
  pure: false 
})
export class SortPipe implements PipeTransform {

  transform(array: Server[]): any {
    return array.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  }
}