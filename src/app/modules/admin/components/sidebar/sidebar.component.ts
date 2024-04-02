import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  Menu: any[] = [
    {

      text: 'Home',
      link: '/dashboard/home',
      icon: 'fa-solid fa-house',
      // isActive: this.isAdmin() || this.isUser() ,
    },
    {

      text: 'Users',
      link: '/dashboard/admin/users',
      icon: 'fa-solid fa-users',
      // isActive: this.isAdmin()  ,
    },
    {

      text: 'Recipes',
      link: '/dashboard/admin/recipes',
      icon: "fa-solid fa-utensils",
      // isActive: this.isAdmin()  ,
    },
    {

      text: 'Categories',
      link: '/dashboard/admin/category',
      icon: "fa-solid fa-layer-group",
      // isActive: this.isAdmin()  ,
    },
    {

      text: 'UserRecipes',
      link: '/dashboard/user/recipes',
      icon: 'fa-solid fa-utensils',
      // isActive: this.isUser(),
    },
    {

      text: 'Favorite',
      link: '/dashboard/user/favorites',
      icon: 'fa-solid fa-heart-circle-check',
      // isActive: this.isUser(),
    },


  ]

}
