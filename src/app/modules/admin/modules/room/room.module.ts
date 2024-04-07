import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewRoomDetailsComponent } from './components/view-room-details/view-room-details.component';
import { DeleteRoomComponent } from './components/delete-room/delete-room.component';


@NgModule({
  declarations: [
    RoomComponent,
    AddEditRoomComponent,
    ViewRoomDetailsComponent,
    DeleteRoomComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    SharedModule
  ]
})
export class RoomModule { }
