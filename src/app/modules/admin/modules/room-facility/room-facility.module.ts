import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomFacilityRoutingModule } from './room-facility-routing.module';
import { RoomFacilityComponent } from './room-facility.component';


@NgModule({
  declarations: [
    RoomFacilityComponent
  ],
  imports: [
    CommonModule,
    RoomFacilityRoutingModule
  ]
})
export class RoomFacilityModule { }
