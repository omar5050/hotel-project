import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/core/service/helper.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  
  lang: any = localStorage.getItem('lang');


  constructor(private _HelperService:HelperService, private _TranslateService:TranslateService){
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
