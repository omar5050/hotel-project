import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delet-ads',
  templateUrl: './delet-ads.component.html',
  styleUrls: ['./delet-ads.component.scss']
})
export class DeletAdsComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletAdsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
