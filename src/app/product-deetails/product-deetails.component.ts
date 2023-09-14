import { Component } from '@angular/core';
import { DataService } from './../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-deetails',
  templateUrl: './product-deetails.component.html',
  styleUrls: ['./product-deetails.component.scss']
})
export class ProductDeetailsComponent {
productId:any;
productDetails:any;
constructor(private _Activate:ActivatedRoute,private _DataService:DataService){
  this._Activate.paramMap.subscribe((param)=>{
    console.log(param.get('id'))
    this.productId=param.get('id');
   })
this.getDetails()
}


getDetails(){
this._DataService.getproductDetails(this.productId).subscribe({
next:(response)=>{
this.productDetails=response.data;
}
})
}



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  autoplay:true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 200,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
}


}
