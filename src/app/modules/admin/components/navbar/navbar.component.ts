import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

ngOnInit(): void {
  
}
is_logOut() {

  this._auth.behLogin.next(false);
  this._auth.isRole.next('')
  localStorage.removeItem('userToken');
localStorage.removeItem('role');
localStorage.removeItem('userName');

   this._Router.navigate(['/landing-page']);
 
  }
}

