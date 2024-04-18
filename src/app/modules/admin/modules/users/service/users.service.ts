import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

  getAllUsers(x:any):Observable<any>{
    return this._HttpClient.get('admin/users',{params:x});
  }

  getUserById(id:number):Observable<any>{
    return this._HttpClient.get(`admin/users/${id}`);
  }

  onCreateUser(data: FormData): Observable<any> {
    return this._HttpClient.post('admin/users', data)
  }
}
