import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../service/landing.service';
import { IRoom } from '../../interfac/iroom';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit{
constructor (private _LandServ:LandingService){

}
totalCard:IRoom[]=[];
totalCount:IRoom|any;
isPge:any='All Rooms'
myFun:any;

length=20;
pageSize=10;
pageIndex=0;
pageNumber=1;
pageSizeOptions=[5,10,20];
pageEvent:any;
ngOnInit(): void {
  // this.getAllRooms();
console.log(this.myFun);
this.myFun=this.getAllRooms;
this.myFun();

}
ngOnChanges(){
}

parame={
  
}

getAllRooms(){
 this.parame={
  page:this.pageNumber,
  size:this.pageSize,
  startDate:'2023-01-20',
  endDate:'2023-01-30'
}


this._LandServ.getAllRooms(this.parame).subscribe({
  next:(res)=>{
console.log(res);
this.totalCard=res.data.rooms;
console.log(this.totalCard);
this.totalCount=res.data.totalCount;
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
 this.getAllRooms();
  
}


}


