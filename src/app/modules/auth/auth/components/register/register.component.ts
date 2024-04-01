import { Component } from '@angular/core';
import { AuthRegisterService } from './service/auth-register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  profileImgValue: any
  files: File[] = [];
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    role: new FormControl('user'),
    profileImage: new FormControl(null)
  })

  constructor(private _Router: Router, private _AuthRegisterService: AuthRegisterService) { }
  onRegister(data: FormGroup) {
    let dataSend = new FormData()
    dataSend.append('userName', data.value.userName)
    dataSend.append('email', data.value.email)
    dataSend.append('password', data.value.password)
    dataSend.append('confirmPassword', data.value.confirmPassword)
    dataSend.append('phoneNumber', data.value.phoneNumber)
    dataSend.append('country', data.value.country)
    dataSend.append('role', data.value.role)
    dataSend.append('profileImage', this.profileImgValue)

    this._AuthRegisterService.register(dataSend).subscribe({
      next: (res) => {
        this._Router.navigate(['/auth/login'])
        console.log(res);

      },
      error: (err) => {
        console.log(err);

      }

    })
    console.log(data.value)
  }

  onSelect(event: any) {
    console.log(event.addedFiles[0]);
    this.profileImgValue = event.addedFiles[0]
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    this.profileImgValue = false
  }

}
