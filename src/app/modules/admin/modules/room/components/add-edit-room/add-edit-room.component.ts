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
  files2: File[] = [];


  imgsList:any[]=[];
  roomImgValue: any;
  previewImg: any[]=[];

  baseUrl: string = 'https://upskilling-egypt.com:3000/api/v0/';
  isLoading: boolean = false;
  tableResponse: any;
  tableData: any[] = [];
  size = 10;
  page = 0;
  RoomById: any;
  viewRoomId:string='';
  onAddRoomMessag:string='';
  getArray:any[]=[];

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










  fillForm(res: any) {
    this.registerRoomForm.patchValue({
      roomNumber: res.roomNumber,
      price: res.price,
      capacity: res.capacity,
      discount: res.discount,
      facilities: res.facilities,
    })
    
    this.previewImg = res.data.room.images;
    console.log(this.previewImg);
    
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
    imgs: new FormControl(null),
  })
  










  onSubmit(data: FormGroup) {
    console.log(data);
    console.log(this.imgsList);
    
    this.isLoading = true;
    let roomFormData = new FormData()
   
  
    roomFormData.append('roomNumber', data.value.roomNumber);
    roomFormData.append('price', data.value.price);
    roomFormData.append('capacity', data.value.capacity);
    roomFormData.append('discount', data.value.discount);
    for (let j = 0; j < data.value.facilities.length; j++) {
      roomFormData.append('facilities', data.value.facilities[j]);
    }
    console.log(this.imgSrc);
// roomFormData.append('imgs',this.imgSrc);
for (const item of this.imgsList) {
  console.log(item);
  
  roomFormData.append('imgs',item);

}


  


   
    
    console.log(data.value);

  
   console.log(roomFormData.getAll('imgs'));
   

    if (this.viewRoomId) {
      console.log(roomFormData);
      
      this.editeRoom(roomFormData);
    } else {
      console.log(roomFormData);
      
      this.addRoom(roomFormData)
    }

    
  }






  onSelect(event:any) {
    console.log(event);
    this.imgSrc=event.addedFiles[0];
    console.log(this.imgSrc);
    this.imgsList.push(this.imgSrc)
    this.files.push(...event.addedFiles);
  }
  
  
  
  
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  


















  editeRoom(roomFormData: any) {
    this._RoomService.onEditRoom(this.viewRoomId, roomFormData).subscribe({
      next: (response) => {
        console.log(response);
         

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

// --------------------------










// -----------------------------------------
  // onSelect(event: any) {
  //   console.log(event);
  //   const selectedFile = event;
  //   // this.imgSrc = event.addedFiles;
  //   console.log(this.previewImg);
  //   this.files.push(...event.addedFiles);
  //   // this.files2.push(...event.addedFiles);
  //   // this.previewImg = event.addedFiles[0];
  //   // this.previewImg = event.addedFiles[1];
  //   for (let index = 0; index < event.addedFiles.length; index++) {
  //     this.previewImg += event.addedFiles[index]
  //   }
  //   console.log(this.previewImg);
    
  // }

  // onRemove(event:any) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }


  // --------------------------------

  getRoomById(id: string) {
    this._RoomService.getRoomById(id).subscribe({
      next: (response) => {
        console.log(response)

        this.fillForm(response);

        this.RoomById = response.data.room;
        this.facilities = response.data.room.facilities;
        console.log(this.RoomById)
        console.log(this.facilities)
      }, error: (error) => {
        this._ToastrService.error('error in edit process')
      }, complete: () => {
           
        for (let j = 0; j < this.facilities.length; j++) {
          this.getArray.push( this.facilities[j]);
        }

        this.registerRoomForm.patchValue({
         
          roomNumber: this.RoomById.roomNumber,
          price: this.RoomById.price,
          capacity: this.RoomById.capacity,
          discount: this.RoomById.discount,
          // facilities: this.getArray.join()|any
        });
      }
    })
  }
}

