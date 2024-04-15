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





ngOnInit(): void {
  this.getAllRooms()
}

getAllRooms(){
let parame={
  page:1,
  size:10,
  startDate:'2023-01-20',
  endDate:'2023-01-30'
}



this._LandServ.getAllRooms(parame).subscribe({
  next:(res)=>{
console.log(res);
this.totalCard=res.data.rooms;
console.log(this.totalCard);
this.totalCount=res.data.res.data.rooms;

  },
  error:(err)=>{
console.log(err);

  },
  complete:()=>{
    console.log('---all room complete----');
    
  }



})

}


}
