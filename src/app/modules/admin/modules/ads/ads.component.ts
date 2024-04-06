import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdsService } from './serviec/ads.service';
import { DataAds } from './interface/iads';
import { DeletAdsComponent } from './component/delet-ads/delet-ads.component';
import { AddEditAdsComponent } from './component/add-edit-ads/add-edit-ads.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit{

  tableData:DataAds[] | any[]=[];

  totalCount:any;

  
  length=20;
  pageSize=10;
  pageIndex=0;
  pageNumber=1;
  pageSizeOptions=[5,10,20];
  pageEvent:any;

  constructor(private adsServ:AdsService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.onGetAllAds();
  }


  onGetAllAds(){
    // if(this.pageNumber==0){
    //   this.pageNumber=1;
    
    // }
    //   let parame={
    
    //     page:this.pageNumber,
    //     size:this.pageSize
    
    //   }
    
    
    this.adsServ.getAllAds().subscribe({
      next:(res)=> {
        console.log(res)
      this.totalCount=res.data.totalCount

      this.tableData=res.data.ads;
    
    
        console.log(this.tableData);
       
        console.log(this.totalCount);
        
      },
      error:(err)=>{
        console.log(err);
    
      }
    })
    
    
    
    }
    









    openDeletDialog(item:any ,action:string): void {
   
      const dialogRef = this.dialog.open(DeletAdsComponent, {
        data: {item:item,action:action},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed',result);
        if(result !=undefined)
        this.onDeletAds(result)
  
      });
    }
   
    onDeletAds(id:any){
  
  
  this.adsServ.deletAds(id).subscribe({
    next:(res)=> {
      console.log(res)
   
  
  
      
    },
    error:(err)=>{
  console.log(err);
  
    },
    complete:()=>{
      this.onGetAllAds();
    }
  })
   }




   openaddDialog(): void {
   
    const dialogRef = this.dialog.open(AddEditAdsComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(result !=undefined)
      this.onAddAds(result)

    });
  }




  onAddAds(body:any){
 
    this.adsServ.addAds(body).subscribe({
      next:(res)=>{
    console.log(res);
    
      },
      error:(err)=>{
    console.log(err);
    
      },
      complete:()=>{
        this.onGetAllAds();
      }
    })
    }




}