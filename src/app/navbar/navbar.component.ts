import { Component } from '@angular/core';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
isLogin:boolean=false;
constructor(private _Auth:AuthService){
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
