import { Component, OnInit } from '@angular/core';
import { RoomService } from './service/room.service';
import { ViewRoomDetailsComponent } from './components/view-room-details/view-room-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteRoomComponent } from './components/delete-room/delete-room.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  //https://upskilling-egypt.com:3000/api/v0/

  tableResponse: any;
  tableData: any[] = [];
  searchKey: string = ''

  tagId: number = 0;
  tags: any[] = [];
  facilityId: number = 0;
  facilities: any[] = [];

  size = 10;
  page = 1;

  constructor(private _RoomService: RoomService, private dialog: MatDialog, private _ToastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAllrooms();
    this.getAllFacilities();
  }


  getAllFacilities() {

    this._RoomService.getAllFacilities().subscribe({
      next: (res) => {
        console.log(res);
        this.facilities = res.data.facilities
      }
    })
  }

  show(data: any) {
    // console.log(data);
    var str = '';
    for (var p in data) {
      if (data.hasOwnProperty(p)) {
        str += data[p].name + ' , ';
      }
    }
    return str;
  }
  
  getAllrooms() {
    let paramData = {
      size: this.size,
      page: this.page
    }
    this._RoomService.getAllRooms(paramData).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = res.data.rooms;
      }
    })
  }


  openRoomsDetailes(item: any) {
    const dialogRef = this.dialog.open(ViewRoomDetailsComponent, {
      data:item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      
    });
  }


  openDeleteRoomDialog(item: any) {
    console.log(item)
    const dialogRef = this.dialog.open(DeleteRoomComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if (result) {
        this.deleteRoom(result);

      }
    });
  }

  deleteRoom(roomId: any) {
    // console.log(roomId);
    
    this._RoomService.onDeleteRoom(roomId).subscribe({
      next: (res) => {
        console.log(res);
      }, error: () => {

      }, complete: () => {
        this.getAllrooms();
        this._ToastrService.info('Deleted Successfuly')
      },
    })
  }
}
