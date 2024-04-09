import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { 

  }

  getCharts():Observable<any>{

    return this.http.get(`admin/dashboard`);
    
}



}