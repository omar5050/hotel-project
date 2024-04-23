import { tableAdss } from './../../../admin/modules/ads/interface/iads';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
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

  tableData: any[] = [];
  tableAdsData: any[] = [];

  count: number = 0;
  constructor(private _HomeServices:HomeService) {
    
  }

  ngOnInit() {
    this.getAllRoomsAds();
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

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year,13 , month)),
    end: new FormControl(new Date(year,16 , month)),
  });


  
  getAllRoomsAds() {
    this._HomeServices.getAllRooms().subscribe({
      next: (res) => {
        console.log(res);
        this.tableData = res;
        this.tableAdsData = res.data.ads.slice(0, 4);
        console.log(this.tableAdsData);
        
      
    }
  })
}


}



