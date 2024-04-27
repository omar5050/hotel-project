import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth/service/auth.service';
import { HelperService } from 'src/app/core/service/helper.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 
constructor(private _auth:AuthService,private _HelperService:HelperService,private _TranslateService:TranslateService){
  _TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
    this.lang = event.lang
  });
}

lang:any = localStorage.getItem('lang');
isRole=this._auth.isRole.value;

  
  ngOnInit(): void {
   
  }


  langFunc(lang:string){
    console.log(lang);
    this._HelperService.onChangeLanguage(lang);
    localStorage.setItem('lang', lang);

  }

}
