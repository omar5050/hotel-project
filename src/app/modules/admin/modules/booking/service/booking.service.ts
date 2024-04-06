import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

// admin/booking?page=1&size=10

getAllBooking(data:any):Observable<any>{
return  this.http.get(`admin/booking?`,{params:data})

}




// admin/booking/6586c3e8a806ff5ff4b91c71

deletBooking(id:any):Observable<any>{
  return  this.http.delete(`admin/booking/${id}`)
  
  }


}