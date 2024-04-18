import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  files: File[] = [];
  profileImgValue: any;
  isLoading: boolean = false;


  constructor(private _UsersService:UsersService, private _ToastrService:ToastrService,private _Router:Router){}

  createUserForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
  })


  onSubmit(data: FormGroup){

    console.log(data.value);
    
    let createUserFormData = new FormData()

    createUserFormData.append('profileImage', this.profileImgValue)
    createUserFormData.append('userName',data.value.userName),
    createUserFormData.append('email',data.value.email),
    createUserFormData.append('phoneNumber',data.value.phoneNumber),
    createUserFormData.append('country',data.value.country),
    createUserFormData.append('password',data.value.password),
    createUserFormData.append('confirmPassword',data.value.confirmPassword),
    createUserFormData.append('role',data.value.role)

    this._UsersService.onCreateUser(createUserFormData).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;

        this._ToastrService.success(response.message);
      }, error: (error) => {
        this.isLoading = false;

        this._ToastrService.error(error.error.message, 'Error ! ');
        console.log(error);

      }, complete: () => {
        this.isLoading = false;
        this._Router.navigate(['/admin/users'])
      },
    })
  }
  
  onSelect(event: any) {
    console.log(event.addedFiles[0]);
    this.profileImgValue = event.addedFiles[0]
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
