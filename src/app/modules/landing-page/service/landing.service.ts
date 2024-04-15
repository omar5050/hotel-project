import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor( private  htpp:HttpClient) { }



getAllRooms(data:any):Observable<any>{


return this.htpp.get(`portal/rooms/available?`,{params:data});


}


}
