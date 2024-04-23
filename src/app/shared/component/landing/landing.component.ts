import { Router } from '@angular/router';
import { LandingService } from './../../../modules/landing-page/service/landing.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IRoom } from 'src/app/modules/landing-page/interfac/iroom';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  pathmmm: any = '/auth'
  isAdmin = localStorage.getItem('role');



  


  
@Input() landingItem:IRoom[]|any;
@Input() totalCountL:IRoom|any;
@Input ()landingFun:any;
@Input ()landingRoom:any;
@Input() landPge:any;
@Input() idFav:any;
@Input () roomIdL:any;
@Output() deletFavIdL=new EventEmitter<string>();
setdeletFav(){
  this.deletFavIdL.emit('remov fav');
}
constructor(private _LandingService:LandingService,
 private _Router:Router



  ) {



  }

  ngOnInit(): void {
    console.log(this.landingItem);

  }



  addFav(favId: any) {
    this._LandingService.addFav(favId).subscribe({
      next: (res) => {
        console.log(res);
        this._Router.navigate(['/landing-page/fav', favId]);

      },
      error: (err) => {
        console.log(err);

      }

    })







  }



  deletFav(id:any,roomId:any){
    this.setdeletFav();
    
    
    console.log(id);
      
this._LandingService.removeFav(id,roomId).subscribe({
  next:(res)=>{
    console.log(res);
    this._Router.navigate(['/landing-page/fav']);

  },
  error:(err)=>{
    console.log(err);

    
  },


    this._LandingService.removeFav(id._id).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => {
        console.log(err);


      },

    })




  }


  getRoomdetails(roomId:any){
    this._Router.navigate(['/landing-page/roomdetails', roomId]);
  }


}
