import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http:HttpClient) { }
getAllRooms():Observable<any>{
  return  this.http.get(`admin/rooms?page=1&size=1000`);
}

getAllAds():Observable<any>{
return  this.http.get(`admin/ads`);

}

addAds(body:any):Observable<any>{

return this.http.post('admin/ads',body);
}










deletAds(id:any):Observable<any>{
  return  this.http.delete(`admin/ads/${id}`);
  
  }



}
