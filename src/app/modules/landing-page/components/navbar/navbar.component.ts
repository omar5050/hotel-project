import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from 'src/app/core/service/helper.service';
import { AuthService } from 'src/app/modules/auth/auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _auth:AuthService,
    private _Router:Router,private _HelperService:HelperService
    ){

  }
  
isLogin:any;
langKey:string='';

isRole=false;
isAdmin=localStorage.getItem('role');

ngOnInit(): void {
console.log(this.isRole);
console.log(this.isAdmin);

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
  

  langFunc(lang:string){
    console.log(lang);
    this._HelperService.onChangeLanguage(lang)
  }
}
