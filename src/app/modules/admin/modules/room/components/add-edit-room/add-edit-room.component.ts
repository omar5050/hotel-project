import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from '../../service/room.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss']
})
export class AddEditRoomComponent {

  facilityId: number = 0;
  facilities: any[] = [];
  selected: any[] = [];

  imgSrc: any;
  files: File[] = [];
  files2: File[] = [];


  imgsList: any = [];
  roomImgValue: any;
  previewImg: any[] = [];

  baseUrl: string = 'https://upskilling-egypt.com:3000/api/v0/';
  isLoading: boolean = false;
  tableResponse: any;
  tableData: any[] = [];
  size = 10;
  page = 0;
  RoomById: any;
  viewRoomId: string = '';
  onAddRoomMessag: string = '';
  getArray: any[] = [];
  tableData_setting: any = [];

  constructor(private sanitizer: DomSanitizer, private _RoomService: RoomService, private _ToastrService: ToastrService, private _Router: Router, private _ActivatedRoute: ActivatedRoute) {
    this.viewRoomId = _ActivatedRoute.snapshot.params['id'];
    console.log(this.viewRoomId);

  }

  ngOnInit(): void {
    this.getAllFacilities();
    this.tableData_setting = {
      idField: '_id',
      textField: 'name',
      enableCheckAll: false,
    };


    if (this.viewRoomId) {
      this.getRoomById(this.viewRoomId);
    }

  }










  fillForm(res: any) {
    console.log('res');
    console.log(res);

    this.registerRoomForm.patchValue({
      roomNumber: res.roomNumber,
      price: res.price,
      capacity: res.capacity,
      discount: res.discount,
      facilities: res.data.room.facilities.name,
    })

    this.previewImg = res.data.room.images;
    console.log(this.previewImg);

  }

  getAllFacilities() {

    this._RoomService.getAllFacilities().subscribe({
      next: (res) => {
        this.tableData = res.data.facilities
      }
    })
  }

  registerRoomForm = new FormGroup({
    roomNumber: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    capacity: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    facilities: new FormControl(),
    imgs: new FormControl(),
  })


  onSubmit(data: FormGroup) {
    console.log(data);
    console.log(this.imgsList);

    this.isLoading = true;

    let roomFormData = new FormData()

    for (let j = 0; j < this.imgSrc.length; j++) {
      roomFormData.append('imgs', this.imgSrc[j],this.imgSrc[j].name);
    }
    roomFormData.append('roomNumber', data.value.roomNumber);
    roomFormData.append('price', data.value.price);
    roomFormData.append('capacity', data.value.capacity);
    roomFormData.append('discount', data.value.discount);
    for (let j = 0; j < data.value.facilities.length; j++) {
      roomFormData.append('facilities', data.value.facilities[j]);
    }
    console.log(this.imgSrc);
    // roomFormData.append('imgs',this.imgSrc);
    // for (const item of this.imgsList) {
    //   console.log(item);

    //   roomFormData.append('imgs', item);

    // }

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

  onSelect(event: any) {
    console.log(event);
    this.imgSrc = event.addedFiles;
    console.log(this.imgSrc);
    // this.imgsList.push(this.imgSrc);
    // console.log(this.imgsList);

    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  editeRoom(roomFormData: any) {
    this._RoomService.onEditRoom(this.viewRoomId, roomFormData).subscribe({
      next: (response) => {
        console.log(response);


      }, error: (error) => {
        this.isLoading = false;

        this._ToastrService.error(error.error.message, 'Error ! ');
        console.log(error);

      }, complete: () => {
        this.isLoading = false;
        this._Router.navigate(['/admin/room']);
        this._ToastrService.success("Successfully updated");
      },
    })
  }

  addRoom(roomFormData: any) {
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
        this._ToastrService.success("Successfully added");
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

  x: any[] = ['a', 'b'];

  getRoomById(id: string) {
    this._RoomService.getRoomById(id).subscribe({
      next: (response) => {
        console.log(response)

        // this.fillForm(response);

        this.RoomById = response.data.room;
        
        let arr: any[] = [...this.RoomById.facilities];
        let ids = arr.map(x => x._id);
        console.log(ids);

        this.facilities = ids;
        // this.tableData_setting = response.data.room.facilities;

        this.imgSrc = this.RoomById.images;
        
        // this.imgsList = arr2;
        // this.files.push(...arr2)
        this.selected = this.facilities;
        // console.log('hi'+this.facilities);


        console.log(this.RoomById)
        console.log(this.facilities)
      }, error: (error) => {
        this._ToastrService.error('error in edit process')
      }, complete: () => {

       

        this.registerRoomForm.patchValue({

          roomNumber: this.RoomById.roomNumber,
          // roomNumber: this.x,
          price: this.RoomById.price,
          capacity: this.RoomById.capacity,
          discount: this.RoomById.discount,
          facilities: this.selected,
          // imgs: 
        });
        console.log(this.registerRoomForm);

      }
    })
  }
}

