import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) { }
  getAllAdsRooms(): Observable<any> {
    return this._HttpClient.get('portal/ads')
  }

  getAllRooms(): Observable<any> {
    return this._HttpClient.get('portal/rooms/available')
  
}

}
