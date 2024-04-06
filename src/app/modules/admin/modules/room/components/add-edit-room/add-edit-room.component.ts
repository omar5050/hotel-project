import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from '../../service/room.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss']
})
export class AddEditRoomComponent {

  facilityId:number=0;
  facilities:any[]=[];
  imgSrc: any;
  files: File[] = [];
  roomImgValue: any
  isLoading: boolean = false;
  tableResponse: any;
  tableData: any[] = [];
  size = 10;
  page = 0;
  RoomById: any;
  viewRoomId:string='';
  onAddRoomMessag:string='';

  constructor(private _RoomService:RoomService ,private _ToastrService: ToastrService, private _Router: Router, private _ActivatedRoute: ActivatedRoute){
    this.viewRoomId = _ActivatedRoute.snapshot.params['id'];
    console.log(this.viewRoomId);
    
  }
  
 ngOnInit(): void {
    this.getAllFacilities();

    if (this.viewRoomId) {
      this.getRoomById(this.viewRoomId);
    }
  }

  getAllFacilities(){
    
    this._RoomService.getAllFacilities().subscribe({
      next: (res) => {
        console.log(res);
        this.tableData = res.data.facilities
      }
    })
  }

  registerRoomForm = new FormGroup({
    roomNumber: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    capacity: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    facilities: new FormControl(null),
  })
  
  onSubmit(data: FormGroup) {
    console.log(data);
    
    this.isLoading = true;
    let roomFormData = new FormData()
    for (let img = 0; img < this.imgSrc.length; img++) {
    roomFormData.append('imgs', this.imgSrc[img],this.imgSrc[img].name);}
    roomFormData.append('roomNumber', data.value.roomNumber)
    roomFormData.append('price', data.value.price)
    roomFormData.append('capacity', data.value.capacity)
    roomFormData.append('discount', data.value.discount)
    for (let j = 0; j < data.value.facilities.length; j++) {
      roomFormData.append('facilities', data.value.facilities[j]);
    }
    console.log(data.value);

    console.log(roomFormData);

    if (this.viewRoomId) {
      this.editeRoom(roomFormData);
    } else {
      this.addRoom(roomFormData)
    }

    
  }

  editeRoom(roomFormData: any) {
    this._RoomService.onEditRoom(this.viewRoomId, roomFormData).subscribe({
      next: (response) => {
       
      }, error: (err) => {
        this._ToastrService.error('error !')
      }, complete: () => {
        this._ToastrService.success();
        this._Router.navigate(['/admin/room']);
      },
    })
  }

  addRoom(roomFormData:any){
    this._RoomService.onAddRoom(roomFormData).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;

        this._ToastrService.success(response.message);
      }, error: (error) => {
        this.isLoading = false;

        this._ToastrService.error(error.error.message, 'Error ! ');
        console.log(error);

      }, complete: () => {
        this.isLoading = false;
        this._Router.navigate(['/admin/room'])
      },
    })
  }

  onSelect(event: any) {
    console.log(event);
    const selectedFile = event;
    // this.imgSrc = event.addedFiles;
    console.log(this.imgSrc);
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files
    console.log(this.files);
    
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  getRoomById(id: string) {
    this._RoomService.getRoomById(id).subscribe({
      next: (response) => {
        // console.log(response)
        this.RoomById = response;
        console.log(this.RoomById)
      }, error: (error) => {
        this._ToastrService.error('error in edit process')
      }, complete: () => {
        this.registerRoomForm.patchValue({
         
          roomNumber: this.RoomById.roomNumber,
          price: this.RoomById.price,
          capacity: this.RoomById.capacity,
          discount: this.RoomById.discount,
          facilities: this.RoomById.facilities,
        });
      }
    })
  }
}

