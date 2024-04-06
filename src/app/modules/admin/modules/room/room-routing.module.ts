import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';

const routes: Routes = [
  { path: '', component: RoomComponent },
  { path: 'add', component: AddEditRoomComponent , title: 'add'},
  { path: 'edit/:id', component: AddEditRoomComponent, title: 'edit' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
