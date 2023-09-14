import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  errMessage:string='';
isLoading:boolean=false;
constructor(private _AuthService:AuthService,private _Router:Router){
}

LoginForm:FormGroup= new FormGroup({
email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{4,}$')]),
})
invalidInput:boolean=false;
signIn(formData:FormGroup){
this.isLoading=true;
console.log(formData)
if(formData.valid){
  this._AuthService.login(formData.value).subscribe({
    next:(response)=>{
    this.isLoading=false;
    if(response.message == 'success'){
    localStorage.setItem('userToken',response.token)
    this._AuthService.decodedUserData()
    this._Router.navigate(['/home'])
    }
    },
    error:(err)=>{
      this.isLoading=false;
    }
  })
}else{
console.log('all inputs are required')
this.invalidInput=true
}


}


}
