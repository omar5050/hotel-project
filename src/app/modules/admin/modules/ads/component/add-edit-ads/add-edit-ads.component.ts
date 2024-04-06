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


  tableDataAds:Room[] | any[]=[];
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
    console.log(this.roomKey,this.discountkey,this.isActiveKey);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

ngOnInit(): void {
this.onGetAllRooms();
this.onGetAllAds();

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
  
  
      console.log(this.tableDataRoom);
     
      console.log(this.totalCountRoom);
      

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
  
  
      console.log(this.tableDataAds);
     
      console.log(this.totalCountAds);
      

      
    },
    error:(err)=>{
      console.log(err);
  
    }
  })
  
  
  
  }






}