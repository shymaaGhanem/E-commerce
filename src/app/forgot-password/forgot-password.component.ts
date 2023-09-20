import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
succesMessage:string=''
errMessage:string=''
constructor(private _Auth:AuthService,private _Route:Router){
}

forgotForm:FormGroup=new FormGroup({
email:new FormControl(null,[Validators.required,Validators.email])
})

VerfiyForm:FormGroup=new FormGroup({
  resetCode:new FormControl(null,[Validators.required])
})

verifyCode(verfiyCode:FormGroup){
console.log(verfiyCode)
this._Auth.virefyCode(verfiyCode.value).subscribe({
next:(response)=>{console.log(response)
if(response.status == 'Success'){
  this._Route.navigate(['/resetPassword'])
}
},
error:(err)=>{console.log(err)

}
})
}


forgotPassword(forgotForm:FormGroup){
this._Auth.forgotPassword(forgotForm.value).subscribe({
next:(response)=>{
this.succesMessage=response.message
this.errMessage='';
document.querySelector('.forgotPassword')?.classList.add('d-none')
document.querySelector('.verfiyCode')?.classList.remove('d-none')
},
error:(err)=>{
console.log(err.error.message)
this.errMessage=err.error.message;
}
}
)
}
}
