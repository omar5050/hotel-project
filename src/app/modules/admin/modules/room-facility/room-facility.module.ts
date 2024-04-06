import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomFacilityRoutingModule } from './room-facility-routing.module';
import { RoomFacilityComponent } from './room-facility.component';
import { FacilitiesRoomListComponent } from './components/facilities-room-list/facilities-room-list.component';
import { AddEditFacilityComponent } from './components/add-edit-facility/add-edit-facility.component';


@NgModule({
  declarations: [
    RoomFacilityComponent,
    FacilitiesRoomListComponent,
    AddEditFacilityComponent
  ],
  imports: [
    CommonModule,
    RoomFacilityRoutingModule,
    SharedModule
  ]
})
export class RoomFacilityModule { }
