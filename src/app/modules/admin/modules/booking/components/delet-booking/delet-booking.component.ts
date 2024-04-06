import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delet-booking',
  templateUrl: './delet-booking.component.html',
  styleUrls: ['./delet-booking.component.scss']
})
export class DeletBookingComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletBookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


