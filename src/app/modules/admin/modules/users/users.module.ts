import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewUserDetailsComponent } from './components/view-user-details/view-user-details.component';
import { CreateUserComponent } from './components/create-user/create-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    ViewUserDetailsComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
