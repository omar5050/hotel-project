import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-facility',
  templateUrl: './add-edit-facility.component.html',
  styleUrls: ['./add-edit-facility.component.scss']
})
export class AddEditFacilityComponent {
key='';
  constructor(
    public dialogRef: MatDialogRef<AddEditFacilityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    if(data.action=='edit'){
      this.key=data.item.name;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
