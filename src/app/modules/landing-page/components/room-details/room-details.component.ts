import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/core/service/helper.service';

import { ActivatedRoute } from '@angular/router';
import { LandingService } from '../../service/landing.service';
import { ToastrService } from 'ngx-toastr';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit{


  lang: any = localStorage.getItem('lang');
  viewRoomId:string='';
  imgs:any[]=[];
  RoomById: any;
  roomNumber:string = '';
  price!:number;
  discount!:number;
  totalCost!:number;
  capacity:string='';

  startDT:Date = new Date('Sun Apr 14 2024 00:00:00 GMT+0200');
  endDT:Date  = new Date('Thu Apr 20 2024 00:00:00 GMT+0200');
  dateDiff!:number;
  days!:number;
  money!:number;

  constructor(private _ActivatedRoute: ActivatedRoute,private _LandingService:LandingService,private _ToastrService:ToastrService){
    this.viewRoomId = _ActivatedRoute.snapshot.params['id'];
    console.log(this.viewRoomId);
  }
  
  ngOnInit(): void {
    this.getRoomById();
    this.calcDate();
    this.langFunc(this.lang)
  }


  bookForm = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  getRoomById(){
    this._LandingService.getRoomDetails(this.viewRoomId).subscribe({
      next: (response) => {
        console.log(response);

        this.RoomById = response.data.room;
        this.roomNumber= this.RoomById.roomNumber;
        this.price = this.RoomById.price;
        this.discount = this.RoomById.discount;
        this.capacity = this.RoomById.capacity;
        this.totalCost = this.price*this.discount/100

        this.imgs = response.data.room.images;
        console.log(this.imgs);
        


      }, error: (error) => {
        this._ToastrService.error(error.error.message);
        console.log(error);

      }
    })
  }

  calcDate(){
    this.dateDiff = Math.abs(this.endDT.getDay()-this.startDT.getDay());
    console.log(this.dateDiff);
    
  }

  submitBooking(data: FormGroup){
    console.log(data.value);
    this.endDT = data.value.end;
    this.startDT = data.value.start;
   
    console.log(this.endDT.getTime() , this.startDT.getTime());

    this.dateDiff = Math.abs(this.endDT.getTime()-this.startDT.getTime());
    this.days = Math.ceil(this.dateDiff / (24 * 60 * 60 * 1000));

    this.money = this.days * this.totalCost;
    console.log(this.days * this.totalCost);

    
  }

 langFunc(lang:string){
    console.log(lang);
    this._HelperService.onChangeLanguage(lang);
    localStorage.setItem('lang', lang);

  }








}
