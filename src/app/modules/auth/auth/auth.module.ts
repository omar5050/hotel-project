import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthComponent } from './auth.component';

import { ForgotPasswrodComponent } from './components/forgot-passwrod/forgot-passwrod.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswrodComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
