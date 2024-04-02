import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(private _AuthService: AuthServiceService,
    private _Router: Router,
    // private _Toastr: ToastrService
  ) { }
  ngOnInit(): void {
    
  }
  forgetPasswordForm = new FormGroup({
    email:new FormControl(null,[Validators.required])
  })
  onSubmitForgotPassword(data:FormGroup){
    console.log(data)
    this._AuthService.forgetPassword(data.value).subscribe({
      next:(res: any)=>{
        console.log(res);
      },
      error:(err: any)=>{
        console.log(err)
      //  this._Toastr.error('Email is Not Valid Please Try Aagin')
      },
      complete:()=>{
        // this._Toastr.success('Send OTP, Please Check your Email')
        this._Router.navigateByUrl('/auth/reset-password');

      }
    })
  }

}
