import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


const RegxPassword: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,20}$/;
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {


  constructor(private _ResetPasswordService:ResetPasswordService,private _ToastrService:ToastrService,private _Router:Router){}


  resetForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    seed: new FormControl(null, [Validators.required, ]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)])
  });


  onSubmit(data:FormGroup){
    this._ResetPasswordService.onResetPassword(data.value).subscribe({
      next:(res)=>{
       console.log(res);
       
      },
      error:(err:any)=>{
        this._ToastrService.error(err.message, 'Error ! ');
      },
      complete:()=>{
        
        this._ToastrService.success('Your Password Changed Successfully','Success')
        this._Router.navigate(['/auth/login'])


      }
    })
  }


}
