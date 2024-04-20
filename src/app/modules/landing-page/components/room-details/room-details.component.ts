import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/core/service/helper.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit{

  lang: any = localStorage.getItem('lang');

  constructor(private _HelperService:HelperService,private _TranslateService:TranslateService){
    _TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
    });
  }

  ngOnInit(): void {
    
    this.langFunc(this.lang)
  }
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  langFunc(lang:string){
    console.log(lang);
    this._HelperService.onChangeLanguage(lang);
    localStorage.setItem('lang', lang);

  }
}
