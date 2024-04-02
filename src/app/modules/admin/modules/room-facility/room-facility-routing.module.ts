import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomFacilityComponent } from './room-facility.component';

const routes: Routes = [{ path: '', component: RoomFacilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomFacilityRoutingModule { }
