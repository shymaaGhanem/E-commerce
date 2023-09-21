import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
constructor(private _cart:CartService){}
payment:FormGroup=new FormGroup({
details:new FormControl(null),
phone:new FormControl(null),
city:new FormControl(null),
})
navigateTourl(url:any){
window.location.href=url
}

onlinePayment(payment:FormGroup){
console.log(payment.value)
this._cart.handlePayment(`650c4fcf45ed4b248c147d68`,payment.value).subscribe({
next:(response)=>{console.log(response)
this.navigateTourl(response.session.url)
},
error:(err)=>{console.log(err)}
})
}

}
