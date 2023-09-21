import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
cartDetails:any
constructor(private _cart:CartService){
}
ngOnInit(): void {
  this.getCart()
}

getCart(){
this._cart.getLoggedUserCart().subscribe({
next:(response)=>{
this.cartDetails=response.data
console.log(response.data)}
})
}


removeItem(productId:string){
this._cart.removeCartItem(productId).subscribe({
next:(respone)=>{console.log(respone)
  this.cartDetails=respone.data
},
error:(err)=>{console.log(err)}
})
}

updateItem(productId:string,count:number){
this._cart.updateCartItem(productId,count).subscribe({
next:(response)=>{console.log(response)
  this.cartDetails=response.data
},
error:(err)=>{console.log(err)}
})
}



}
