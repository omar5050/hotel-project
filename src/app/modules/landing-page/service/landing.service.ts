import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor( private  http:HttpClient) { }



getAllRooms(data:any):Observable<any>{
console.log(data);


return this.http.get(`portal/rooms/available?`,{params:data});


}


// {{baseUrlDev}}/api/v0/portal/favorite-rooms

getAllfavorite():Observable<any>{

return this.http.get('portal/favorite-rooms');



}


}
