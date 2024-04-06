import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _HttpClient: HttpClient) { }

  getAllRooms(param: any): Observable<any> {
    return this._HttpClient.get('admin/rooms', { params: param })
  }

  getRoomById(id: string): Observable<any> {
    return this._HttpClient.get(`admin/rooms/${id}`)
  }

  getAllFacilities(): Observable<any> {
    return this._HttpClient.get('admin/room-facilities')
  }


  onAddRoom(data: FormData): Observable<any> {
    return this._HttpClient.post('admin/rooms', data)
  }

  onEditRoom(id:string,data: FormData){
    return this._HttpClient.put('admin/rooms', data)
  }

  onDeleteRoom(id: number): Observable<any> {
    return this._HttpClient.delete(`admin/rooms/${id}`)
  }
}
