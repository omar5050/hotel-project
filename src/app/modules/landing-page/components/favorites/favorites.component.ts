import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LandingService } from '../../service/landing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit ,OnChanges{
  idFav:any;
  roomIdFav:any
  emitDeletFav:string='';
  removfav=localStorage.getItem('removfav')
  
  constructor (private _LandServ:LandingService,

    private _Router:Router

  ){

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

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  console.log(this.emitDeletFav);
  
}

reciveFav(event:any){
  console.log(event);
  
}
ngOnInit(): void {
  this.getAllfavorite();


  
  

}


getAllfavorite(){
 this._LandServ.getAllfavorite().subscribe({
   next:(res)=>{
 console.log(res);
 
 this.totalCard=res.data.favoriteRooms[0].rooms;

this.roomIdFav=res.data.favoriteRooms[0]._id;
console.log(this.roomIdFav);

//  console.log(this.totalCard);
 this.totalCount=res.data.totalCount
 ;

 
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


// deletFav(){
//   console.log('2222');
  
// this._LandServ.removeFav(this.removfav).subscribe({
//   next:(res)=>{
// console.log(res);
// this.getAllfavorite();
// localStorage.removeItem('removfav')
//   },
//   error:(err)=>{
// console.log(err);

//   }


// })
// }

}
