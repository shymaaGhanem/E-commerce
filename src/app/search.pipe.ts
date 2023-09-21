import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[],searchval:string): any[] {
    return products.filter((el)=>{
    return el.title.toLowerCase().includes(searchval.toLowerCase())
    });
  }

}
