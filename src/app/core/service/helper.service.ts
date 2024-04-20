import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  lang:any = localStorage.getItem('lang');

  constructor(private _TranslateService:TranslateService) {

    if (localStorage.getItem('lang') !==null) {
       this.onChangeLanguage(this.lang)
    }else
    {
      this.onChangeLanguage('en')
    }
     
    _TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
    });
   }

  onChangeLanguage(lang:string) {

    localStorage.setItem('lang',lang);
    // this language will be used as a fallback when a translation isn't found in the current language
    this._TranslateService.setDefaultLang(lang);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this._TranslateService.use(lang);
  }

}
