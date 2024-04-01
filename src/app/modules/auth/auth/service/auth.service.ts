import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) 
  { }
onLogin(data:any):Observable<any>{
  let baseUrlDev='https://154.41.228.234:3000';
  // // {{baseUrlDev}}/api/v0/portal/users/login
  // return this._http.post(`${baseUrlDev}/api/v0/portal/users/login`,{data});

return this._http.post(`users/login`,{data});
}

}
