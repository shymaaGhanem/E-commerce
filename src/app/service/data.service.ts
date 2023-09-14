import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`;

  constructor(private _HttpClient:HttpClient) { }
  
  gatData(dataType:string):Observable<any>{
  return this._HttpClient.get(this.baseUrl+dataType)
  }
  
  getproductDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }

}
