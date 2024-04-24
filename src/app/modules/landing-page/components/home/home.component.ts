
import { Component } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { tableAdss } from './../../../admin/modules/ads/interface/iads';

import { HomeService } from '../../services/home.service';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent {
  count: number = 0;
  
  // counter(type: string) {
    
  //   type === 'plus' ? this.count++ : this.count--;
  // }


  campaignOne = new FormGroup({
    start: new FormControl(new Date(year,13 , month)),
    end: new FormControl(new Date(year,16 , month)),
  });

  tableData: any[] = [];
  tableAdsData: any[] = [];
  tableHouseData: any[] = [];
  tableLivingData: any[] = [];


  constructor(private _HomeServices:HomeService) {
    
  }

  ngOnInit() {
    this.getAllRoomsAds();
    this.getAllHousesRoom();
    this.getAllLivingRoom();
  }


  // counter(type: string) {
    
  //   type === 'plus' ? this.count++ : this.count--;
  // }
  increment() {
    this.count++;
  }
  decrement() {
    if(this.count>0)
    this.count--;
  }




  
  getAllRoomsAds() {
    this._HomeServices.getAllAdsRooms().subscribe({
      next: (res) => {
        console.log(res);
        this.tableData = res;
        this.tableAdsData = res.data.ads.slice(0, 4);
        console.log(this.tableAdsData);
        
      
    }
  })
  }
  getAllHousesRoom() {
    this._HomeServices.getAllRooms().subscribe({
      next: (res) => {
        console.log(res);
        this.tableData = res;
        this.tableHouseData = res.data.rooms.slice(0, 4);
        console.log(this.tableHouseData);
        
        
      }
    })
  }
  getAllLivingRoom() {
    this._HomeServices.getAllRooms().subscribe({
      next: (res) => {
        console.log(res);
        this.tableData = res;
        this.tableLivingData = res.data.rooms.slice(5, 9);
        console.log(this.tableLivingData);
        
        
      }
    })
  }

}



