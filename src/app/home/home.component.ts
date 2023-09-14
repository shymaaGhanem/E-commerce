import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
catData:any[]=[];
products:any[]=[];
brands:any[]=[];
constructor(private _DataService:DataService){
this.getCategories();
this.getBrands()
this.getProducts()
}

getCategories(){
this._DataService.gatData('categories').subscribe((response)=>{
this.catData=response.data;
})
}
getProducts(){
this._DataService.gatData('products').subscribe((response)=>{
this.products=response.data;
})
}
getBrands(){
this._DataService.gatData('brands').subscribe((response)=>{
this.brands=response.data.slice(0,4);
})
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  autoplay:true,
  navSpeed: 700,
  margin:10,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 4
    },
    940: {
      items: 5
    }
  },
  nav: true
}
}

