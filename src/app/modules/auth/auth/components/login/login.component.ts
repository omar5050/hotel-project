import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

constructor(private _autServ:AuthService,private _toastr:ToastrService , private _Router:Router){}
token:string='';
role:string='';
userName:string='';

loginForm=new FormGroup({
  email:new FormControl(null,[Validators.required, Validators.email]),
  password:new FormControl(null,[ Validators.required,
    // Validators.pattern(
    //   '^(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{7,}$'
    // ),
  ]),
})
  ngOnInit(): void {

  }

onLogin(loginForm:FormGroup){
console.log(loginForm.value);
if(loginForm.valid){


this._autServ.onLogin(loginForm.value).subscribe({

next:(res)=>{
  console.log(res.data);

console.log(res.data.token);
this.token=res.data.token;
this.role=res.data.user.role;
this.userName=res.data.user.userName;

localStorage.setItem('userToken',this.token);
localStorage.setItem('role',this.role);
localStorage.setItem('userName',this.userName);

// landing-page
console.log(res.success);
if(res.success){
  this._autServ.behLogin.next(true)
}



if(this.role=='admin'){
  this._autServ.isRole.next('admin');
  this._autServ.behLogin.next(true)


this._Router.navigate(['/admin'])
}

if(this.role=='user'){
  this._autServ.isRole.next('user');
  this._autServ.behLogin.next(true)


  this._Router.navigate(['/landing-page'])

}

},
error:(err)=>{
  console.log(err);
  this._toastr.success(err.error.message, 'Login Fail');
  

},
complete:()=>{
  console.log('complete login---');
  this._toastr.success('Login success, Login Successfully')

},

})
}


}

}
