import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTitle'
})
export class AddTitlePipe implements PipeTransform {

  transform(value:string): string {
    return `product ..${value}`;
  }

}
