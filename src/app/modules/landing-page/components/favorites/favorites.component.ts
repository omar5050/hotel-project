import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../service/landing.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor (private _LandServ:LandingService){

  }

  totalCard:any[]=[];
  totalCount:any|any;
  isPge:any='All Favorites'
  myFun:any;

  length=20;
  pageSize=10;
  pageIndex=0;
  pageNumber=1;
  pageSizeOptions=[5,10,20];
  pageEvent:any;


ngOnInit(): void {
  this.getAllfavorite()
}


getAllfavorite(){
 this._LandServ.getAllfavorite().subscribe({
   next:(res)=>{
 console.log(res);
 this.totalCard=res.data.favoriteRooms[0].rooms;
 console.log(this.totalCard);
 this.totalCount=res.data.totalCount
 ;
 console.log(this.totalCount);
 
   },
   error:(err)=>{
 console.log(err);
 
   },
   complete:()=>{
     console.log('---all room complete----');
     
   }
 
 
 
 })
 
 }




 handlePageEvent(e: any) {
  
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageNumber = e.pageIndex;
 this.getAllfavorite();
  
}



}
