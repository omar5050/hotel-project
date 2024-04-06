import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeletBookingComponent } from './components/delet-booking/delet-booking.component';


@NgModule({
  declarations: [
    BookingComponent,
    DeletBookingComponent,
    
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule
  ]
})
export class BookingModule { }
