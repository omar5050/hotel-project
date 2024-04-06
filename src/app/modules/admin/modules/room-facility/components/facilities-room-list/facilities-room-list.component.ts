
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FacilitiesService } from '../../services/facilities.service';
import { AddEditFacilityComponent } from '../add-edit-facility/add-edit-facility.component';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';

@Component({
  selector: 'app-facilities-room-list',
  templateUrl: './facilities-room-list.component.html',
  styleUrls: ['./facilities-room-list.component.scss']
})
export class FacilitiesRoomListComponent {

  tableData:any[] = [];
  tableResponse: any;
  searchKey: string="";
  addData:any[]=[]

  constructor(
    private _FacilitiesService: FacilitiesService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllFacilitesRoom();
  }
  getAllFacilitesRoom() {
    this._FacilitiesService
      .getAllFacilitiesRoom()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.tableResponse = res;

          this.tableData = res.data.facilities;
          // this.tableData=this.tableResponse.data
          console.log(this.tableData);
          
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  

   openAddFacilitiesDialog(name:any) {
     const dialogRef = this.dialog.open(AddEditFacilityComponent, {
      data: {data:name},
    
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      //  let x = {name:result}
      if (result) {
        this.addFacilities(result);
      }
    });
  }

  openEditDialog(CategoryData: any) {
    console.log(CategoryData);

    const dialogRef = this.dialog.open(AddEditFacilityComponent, {
      data: CategoryData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      //  let x = {name:result}
      if (result) {
        this.editFacilities(result);
      }
    });
  }
  
  openDeleteDialog(FacilityData: any) {
    console.log(FacilityData);

    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {data:FacilityData},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      //  let x = {name:result}
      if (result) {
        this.deleteCategory(result);
      }
    });
  }
  addFacilities(FacilityName: string) {
    this._FacilitiesService.onAddFacility(FacilityName).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = res.data.facilities;
        console.log(this.tableData);
        
        this.toastr.success('Facility', ' Added Facility Success');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Facility', ' Added Facility field');
      },
      complete: () => {
        this.getAllFacilitesRoom();
      },
    });
  }

  editFacilities(categoryItem: any) {
    this._FacilitiesService.onEditFacilities(categoryItem).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success('Category', ' Updated Category Success');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Category', ' Updated Category field');
      },
      complete: () => {
        this.getAllFacilitesRoom();
      },
    });
  }

  deleteCategory(facilityId: any) {
    this._FacilitiesService.onDeleteFacilities(facilityId).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success('Facility', ' deleted Facility Success');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Facility', ' deleted Facility field');
      },
      complete: () => {
        this.getAllFacilitesRoom();
      },
    });
  }
}
