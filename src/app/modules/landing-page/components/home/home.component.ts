
import { Component } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { tableAdss } from './../../../admin/modules/ads/interface/iads';

import { HomeService } from '../../services/home.service';
import { HelperService } from 'src/app/core/service/helper.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';


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
  lang: any = localStorage.getItem('lang');
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


  constructor(private _HomeServices:HomeService,private _HelperService:HelperService, private _TranslateService:TranslateService) {
    _TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
    });
  }

  ngOnInit() {
    this.getAllRoomsAds();
    this.getAllHousesRoom();
    this.getAllLivingRoom();

    this.langFunc(this.lang);
    //  this.isLang = localStorage.getItem('lang');
    //  console.log(this.isLang);
    
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


  langFunc(lang:string){
    console.log(lang);
    this._HelperService.onChangeLanguage(lang);
    localStorage.setItem('lang', lang);

  }
}



