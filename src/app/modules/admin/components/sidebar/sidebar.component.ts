import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu } from '../sidebar/models/imenu'
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  expnadSideBar = false;
  @Output() myEvent = new EventEmitter<any>();
  widthSubject = new BehaviorSubject<number>(0);
  constructor(private elementRef: ElementRef) { }


  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    const width = this.elementRef.nativeElement.offsetWidth;
    this.widthSubject.next(width);
  }

  ngOnInit(): void {


    let sideBar = this.elementRef.nativeElement.querySelector('.sidebar')
    let arrow = this.elementRef.nativeElement.querySelector('.arrow-right')
    arrow.style.left = `${sideBar.offsetWidth}px`
    arrow.style.top = '50%'

    this.widthSubject.subscribe(width => {
      console.log('subekct: ' + width);

    });

  }

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

  getWidth(event: any) {
    console.dir(event);

  }

  onClick(): void {
    this.myEvent.emit(this.expnadSideBar);
  }


}
function HostListener(arg0: string, arg1: string[]): (target: SidebarComponent, propertyKey: "onResize", descriptor: TypedPropertyDescriptor<(event: any) => void>) => void | TypedPropertyDescriptor<(event: any) => void> {
  throw new Error('Function not implemented.');
}

