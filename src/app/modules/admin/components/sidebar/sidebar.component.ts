import { Component } from '@angular/core';
import { IMenu } from '../sidebar/models/imenu'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isOpened: boolean = true;

  
  Menu: IMenu[] = [
    {

      text: 'Home',
      link: '/admin/home',
      icon: 'fa-solid fa-house',
      // isActive: this.isAdmin() || this.isUser() ,
    },
    // {

    //   text: 'Users',
    //   link: '/admin/users',
    //   icon: 'fa-solid fa-users',
    //   // isActive: this.isAdmin()  ,
    // },
    {

      text: 'Rooms',
      link: '/admin/room',
      icon: "fa-solid fa-hotel",
      // isActive: this.isAdmin()  ,
    },

    {

      text: 'Ads',
      link: '/admin/ads',
      icon: "fa-solid fa-calendar-days",
      // isActive: this.isAdmin()  ,
    },
    {

      text: 'Room Facility',
      link: '/admin/room-facility',
      icon: "fa-solid fa-cubes-stacked",
      // isActive: this.isAdmin()  ,
    },
    {

      text: 'Booking',
      link: '/admin/booking',
      icon: 'fa-solid fa-users',
      // isActive: this.isUser(),
    },


  ]

}
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWExNGIxYTI4M2I1NmY1NjgyMTMyNGYiLCJyb2xlIjoiYWRtaW4iLCJ2ZXJpZmllZCI6ZmFsc2UsImlhdCI6MTcxMjI5MTcyMCwiZXhwIjoxNzEzNTAxMzIwfQ.4JHMgWkr3IZ6ESlbaJFc8ZLVp1MiKiKLFQL4W2qJmRw