import { Component } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { CartService } from './../service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
isLogin:boolean=false;
cartNumber:number=0;
constructor(private _Auth:AuthService,private _cart:CartService){
_cart.numberOfCartItem.subscribe({
next:(res)=>{
this.cartNumber=res;
}
})
_Auth.userData.subscribe({
next:()=>{
  if(_Auth.userData.getValue() !== null){
     this.isLogin = true;
    }else {
      this.isLogin = false;
    }
}
})

}

logOut(){
this._Auth.logOut()
}
}
