import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _auth:AuthService,
    private _Router:Router,
    ){

  }
  
isLogin:any;

isRole=false;


ngOnInit(): void {
console.log(this.isRole);

this._auth.behLogin.subscribe({
next:(behValue:any)=>{
this.isLogin=behValue;
  }
})



if(localStorage.getItem('userToken')!==null){
console.log(localStorage.getItem('userToken'));
this.isRole=true
}
else{
  console.log('not found');
  this.isRole=false
}
}
  

is_logOut() {

  this._auth.behLogin.next(false);
  this._auth.isRole.next('');
  localStorage.removeItem('userToken');
  localStorage.removeItem('role');
  localStorage.removeItem('userName');
  this.isRole=false;
   this._Router.navigate(['/landing-page']);
  }
  
}
