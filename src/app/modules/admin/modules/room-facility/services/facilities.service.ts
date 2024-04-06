import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private _HttpClient: HttpClient) { }
   
  getAllFacilitiesRoom(): Observable<any> {
    return this._HttpClient.get('admin/room-facilities')
  }
  onAddFacility(data: string): Observable<any> {
    return this._HttpClient.post('admin/room-facilities', { name: data })
  
  }
  onDeleteFacilities(id: number): Observable<any> {
    return this._HttpClient.delete(`admin/room-facilities//${id}`);
  }
  onEditFacilities(data: string): Observable<any> {
    return this._HttpClient.put('admin/room-facilities', { name: data });


  }
}