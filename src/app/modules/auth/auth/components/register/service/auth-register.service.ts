import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {

  constructor(private _HttpClient: HttpClient) { }


  register(data: FormData): Observable<any> {
    return this._HttpClient.post('portal/users', data)
  }
}
