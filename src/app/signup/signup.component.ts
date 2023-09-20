import { Component } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
errMessage:string='';
isLoading:boolean=false;
constructor(private _AuthService:AuthService){
}

registerForm:FormGroup= new FormGroup({
name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{4,}$')]),
rePassword:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{4,}$')]),
phone:new FormControl(null,[Validators.required,Validators.pattern('^(01)[0125][0-9]{8}')])
},{validators:this.RepasswordMatch})

RepasswordMatch(form:any){
// form.controls['name']
// form.controls['email']
let password=form.get('password')
let rePassword=form.get('rePassword')
if(password.value === rePassword.value){
return null
}else{
rePassword.setErrors({repasswordMatch:'repassword not matched'})
return {repasswordMatch:'repassword not matched'}
}
}

signUp(formData:FormGroup){
this.isLoading=true;
console.log(formData)
this._AuthService.Register(formData.value).subscribe({
next:(response)=>{console.log(response)
this.isLoading=false;
},
error:(err)=>{
this.errMessage =err.error.message;
this.isLoading=false;
}
})
}

}
