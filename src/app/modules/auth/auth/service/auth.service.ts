import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  onLogin(data: any): Observable<any> {


    console.log(data);

    return this._http.post(`portal/users/login`, data);
  }

}
