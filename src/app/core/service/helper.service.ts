import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private _TranslateService:TranslateService) {

      this.onChangeLanguage('en')

   }

  onChangeLanguage(lang:string) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this._TranslateService.setDefaultLang(lang);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this._TranslateService.use(lang);
  }

}
