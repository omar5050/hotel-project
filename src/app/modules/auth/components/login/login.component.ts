import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
constructor(private _autServ:AuthService){

}
loginForm=new FormGroup({
  email:new FormControl(null),
  password:new FormControl(null)
})
  ngOnInit(): void {

  }

onLogin(loginForm:FormGroup){
console.log(loginForm.value);

this._autServ.onLogin(loginForm.value).subscribe({

next:(res)=>{
console.log(res);

},
error:(err)=>{
console.log(err);

},
complete:()=>{
console.log('compplet login---');

},

})

}

}