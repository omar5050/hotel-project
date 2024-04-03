import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 
constructor(private _auth:AuthService){

}

isRole=this._auth.isRole.value;

  
  ngOnInit(): void {
    
  }




}
