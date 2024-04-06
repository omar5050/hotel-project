import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomFacilityComponent } from './room-facility.component';
import { FacilitiesRoomListComponent } from './components/facilities-room-list/facilities-room-list.component';

const routes: Routes = [{
  path: '', component: RoomFacilityComponent, children: [
    {
      path: '', redirectTo: 'facility-list', pathMatch: 'full'
    },
    {
      path: 'facility-list', component:FacilitiesRoomListComponent
    },

  ] 
  


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomFacilityRoutingModule { }
