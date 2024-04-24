import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }



  getAllRooms(data: any): Observable<any> {
    console.log(data);


    return this.http.get(`portal/rooms/available?`, { params: data });


  }


  // {{baseUrlDev}}/api/v0/portal/favorite-rooms

  getAllfavorite(): Observable<any> {

    return this.http.get('portal/favorite-rooms');



  }


  addFav(roomId: any): Observable<any> {

    return this.http.post(`portal/favorite-rooms`, { roomId });

  }


removeFav(Id:any,roomId:string|any):Observable<any>{
  console.log(Id,roomId);



  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: {
      roomId: roomId
    }
  };
  return this.http.delete(`portal/favorite-rooms/${Id}`, options );

}
  // removeFav(roomId: any): Observable<any> {
  //   console.log(roomId);
  //   return this.http.delete(`portal/favorite-rooms/${roomId}`);



  // }

  getRoomDetails(roomId:any): Observable<any>{
    return this.http.get(`portal/rooms//${roomId}`)
  }
}
