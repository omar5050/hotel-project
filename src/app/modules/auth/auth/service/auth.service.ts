import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role: string | null | undefined;
  behLogin:any=new BehaviorSubject(false);
  isRole: any=new BehaviorSubject('');

  constructor(private _http: HttpClient) {


    
    console.log(this.isRole);

   


  }
 





  
  
  onLogin(data: any): Observable<any> {


    console.log(data);

    return this._http.post(`portal/users/login`, data);
  }

}
