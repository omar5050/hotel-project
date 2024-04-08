import { Component, OnInit } from '@angular/core';
import { Ibooking, Room } from './interFace/ibooking';
import { BookingService } from './service/booking.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DeletBookingComponent } from './components/delet-booking/delet-booking.component';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
[x: string]: any;

tableData:Ibooking[]=[];

totalCount:Ibooking|any 



   length=20;
  pageSize=10;
  pageIndex=0;
  pageNumber=1;
  pageSizeOptions=[5,10,20];
  pageEvent:any;

constructor(private bookingServ:BookingService,

  public dialog: MatDialog
){

}


ngOnInit(): void {
  this.onGetAllBooking()
}


onGetAllBooking(){
if(this.pageNumber==0){
  this.pageNumber=1;

}
  let parame={

    page:this.pageNumber,
    size:this.pageSize

  }


this.bookingServ.getAllBooking(parame).subscribe({
  next:(res)=> {
    console.log(res)
  this.totalCount=res.data.totalCount
  this.tableData=res.data.booking;


    console.log(this.tableData);
   
    console.log(this.totalCount);
    
  },
  error:(err)=>{
    console.log(err);

  }
})



}







openDeleteDialog(item:any ,action:string): void {
   
    const dialogRef = this.dialog.open(DeletBookingComponent, {
      data: {item:item,action:action},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(result !=undefined)
      this.onDeleteBooking(result)

    });
  }
 
 onDeleteBooking(id:any){


this.bookingServ.deletBooking(id).subscribe({
  next:(res)=> {
    console.log(res)
 


    
  },
  error:(err)=>{
console.log(err);

  },
  complete:()=>{
    this.onGetAllBooking();
  }
})
 }


 handlePageEvent(e: any) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageNumber = e.pageIndex;
  this.onGetAllBooking();
}
 
  }


























// }