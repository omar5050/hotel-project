import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }


  getErrorMessageforEmail(form: FormGroup, controlName: string, validationError: any) {

    if (form.get(controlName)?.getError(validationError.required)) {
      return 'Email is requierd';
    }

    return form.get(controlName)?.getError(validationError.email) ? 'The email format is invalid.' : '';
  }

  getErrorMessageforPasswrod(form: FormGroup, controlName: string, validationError: any) {

    if (form.get(controlName)?.getError(validationError.required)) {
      return 'Passwrod is requierd';
    }

    if (form.get(controlName)?.getError(validationError.maxlength)) {
      return 'MaxLength at max 20 characters long.';
    }
    if (form.get(controlName)?.getError(validationError.minlength)) {
      return 'MinLength at least 6 characters long.';
    }

    return form.get(controlName)?.getError(validationError.pattern) ? 'must include at least one lowercase letter, one uppercase letter, one digit, one special character' : '';
  }

}
