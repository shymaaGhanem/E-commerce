import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData= new BehaviorSubject(null);

decodedUserData(){
let encodedToken:any = localStorage.getItem('userToken');
let decodedToken:any = jwtDecode(encodedToken);
this.userData.next(decodedToken);
}

constructor(private _http:HttpClient,private _Router:Router){
if(localStorage.getItem('userToken') !== null){
this.decodedUserData();
}
}

Register(formData:any):Observable<any>{
return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formData)
}

login(formData:any):Observable<any>{
  return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formData)
}

logOut(){
localStorage.removeItem('userToken')
this.userData.next(null);
this._Router.navigate(['/signin'])
}
  
  
  
forgotPassword(formData:any):Observable<any>{
  return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,formData)
}

virefyCode(formData:any):Observable<any>{
  return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,formData)
}

resetPassword(formData:any):Observable<any>{
  return this._http.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,formData)
}


}
