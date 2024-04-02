import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _HttpClient:HttpClient) { }

  forgetPassword(data:any):Observable<any>{
    return this._HttpClient.post('portal/users/forgot-password',data)
   }
}
