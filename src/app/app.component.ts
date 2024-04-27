import { Component, OnInit } from '@angular/core';
import { HelperService } from './core/service/helper.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotel-project';
  lang: any = localStorage.getItem('lang');

  constructor(private _HelperService:HelperService,private _TranslateService:TranslateService){
    _TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
    });
  }
  ngOnInit(): void {
    
    this.langFunc(this.lang)
  }
  langFunc(lang:string){
    console.log(lang);
    this._HelperService.onChangeLanguage(lang);
    localStorage.setItem('lang', lang);

  }
}
