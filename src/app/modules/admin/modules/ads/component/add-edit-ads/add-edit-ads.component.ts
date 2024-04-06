import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdsService } from '../../serviec/ads.service';
import { Room } from '../../interface/iads';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-ads',
  templateUrl: './add-edit-ads.component.html',
  styleUrls: ['./add-edit-ads.component.scss']
})
export class AddEditAdsComponent implements OnInit {


  tableDataRoom:Room[] | any[]=[];
  totalCountRoom:any;


  tableDataAds: any=[];
  totalCountAds:any;

   
   discountkey: any;


roomKey: any;
isActiveKey: any;

body:any={
  // room:this.roomKey ,
  // discount:this.discountkey ,
  // isActive: this.isActiveKey
}

  constructor(private adsServ:AdsService,
    private _Router:Router,
    public dialogRef: MatDialogRef<AddEditAdsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit(): void {
 
this.onGetAllRooms();

}
form=new FormGroup({
  room:new FormControl(null),
  discount:new FormControl(null),
  isActive:new FormControl(null),

})
onGetAllRooms(){
  
  
  
  this.adsServ.getAllRooms().subscribe({
    next:(res)=> {
    this.totalCountRoom=res.data.totalCountRoom

    this.tableDataRoom=res.data.rooms;
    this.onGetAllAds();
   
  
      // console.log(this.tableDataRoom);
     
      // console.log(this.totalCountRoom);
      

    },
    error:(err)=>{
      console.log(err);
  
    }
  })
  
}
  


onGetAllAds(){
 
  
  
  this.adsServ.getAllAds().subscribe({
    next:(res)=> {
      console.log(res)
    this.totalCountAds=res.data.totalCount

    this.tableDataAds=res.data.ads;
    // this.getTable();
  
      // console.log(this.tableDataAds);
     
      // console.log(this.totalCountAds);
      


      
    },
    error:(err)=>{
      console.log(err);
  
    }
  })
  
  
  
  
}



// getTable(){
//   // console.log(this.tableDataRoom);
//   // console.log(this.tableDataAds);
//   let res:any[]=[];
//   for(let i=0 ;i<this.tableDataAds.length;i++){

// console.log('/n/n',this.tableDataAds[i].room.roomNumber
// );

//     for(let j=0;j<this.tableDataRoom.length;j++){
//     if(this.tableDataAds[i].room.roomNumber!=this.tableDataRoom[j].roomNumber)
//     res.push(this.tableDataAds[i])
//     }


//   }
//   console.log(res);
  


// for(let j=0;j<this.tableDataRoom.length;j++){



//   if(this.tableDataAds[j].room.roomNumber!=this.tableDataRoom[j].roomNumber)
//   res.push(this.tableDataAds[j])
//   }



// }
}