import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
constructor(private _autServ:AuthService,private _toastr:ToastrService){

}
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
console.log(res);

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
