import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.scss']
})
export class ViewUserDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewUserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
