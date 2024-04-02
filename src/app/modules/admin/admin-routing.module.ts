import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
      { path: 'room', loadChildren: () => import('./modules/room/room.module').then(m => m.RoomModule) },
      { path: 'booking', loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule) },
      { path: 'room-facility', loadChildren: () => import('./modules/room-facility/room-facility.module').then(m => m.RoomFacilityModule) },
      { path: 'ads', loadChildren: () => import('./modules/ads/ads.module').then(m => m.AdsModule) },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
