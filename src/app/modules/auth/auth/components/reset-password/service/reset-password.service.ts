import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private _HttpClient:HttpClient) { }

  onResetPassword(data: FormGroup): Observable<any> {
    return this._HttpClient.post('portal/users/reset-password', data)
  }

}
