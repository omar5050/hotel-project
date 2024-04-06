import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-room-details',
  templateUrl: './view-room-details.component.html',
  styleUrls: ['./view-room-details.component.scss']
})
export class ViewRoomDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewRoomDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
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
}
