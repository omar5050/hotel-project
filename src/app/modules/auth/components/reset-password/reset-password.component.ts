import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const RegxPassword: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,20}$/;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  isLoading: boolean = false;
  showpassword = false;
  showConfirmPassword = false;
  hidePass = true;
  hideConfirmPass = true;


  constructor(private _AuthService:AuthService,private _ToastrService:ToastrService){}

  toggleShow1() {
    this.showpassword = !this.showpassword;
  }

  toggleShow2() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  resetForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    OTP: new FormControl(null, [Validators.required, ]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)])
 
  })
  


  getErrorMessageforEmail() {
    return this._AuthService.getErrorMessageforEmail(this.resetForm, 'email', { required: 'required', email: 'email' })
  }

  getErrorMessageforPasswrod() {
    return this._AuthService.getErrorMessageforPasswrod(this.resetForm, 'password', { required: 'required', minlength: 'minlength', maxlength: 'maxlength', pattern: 'pattern' })
  }

  onReset(data: FormGroup) {
    console.log(data);
    
    this.isLoading = true;
    let resetFormData = new FormData()
    resetFormData.append('email', data.value.email)
    resetFormData.append('OTP', data.value.OTP)
    resetFormData.append('password', data.value.password)
    resetFormData.append('confirmPassword', data.value.confirmPassword)
    console.log(data.value);

    console.log(resetFormData);
    // this._AuthService.register(resetFormData).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.isLoading = false;

    //     this._ToastrService.success(response.message);
    //   }, error: (error) => {
    //     this.isLoading = false;

    //     this._ToastrService.error(error.error.message, 'Error ! ');
    //     console.log(error);

    //   }, complete: () => {
    //     this.isLoading = false;
    //     // this.openDialog()
    //   },
    // })
  }
}
