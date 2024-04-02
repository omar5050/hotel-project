import { Component } from '@angular/core';
import { IMenu } from '../sidebar/models/imenu'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  Menu: IMenu[] = [
    {

      text: 'Home',
      link: '/admin/home',
      icon: 'fa-solid fa-house',
      // isActive: this.isAdmin() || this.isUser() ,
    },
    {

      text: 'Users',
      link: '/admin/users',
      icon: 'fa-solid fa-users',
      // isActive: this.isAdmin()  ,
    },
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

      text: 'Booking',
      link: '/admin/booking',
      icon: 'fa-solid fa-users',
      // isActive: this.isUser(),
    },


  ]

}
