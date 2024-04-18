import { LandingService } from './../../../modules/landing-page/service/landing.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IRoom } from 'src/app/modules/landing-page/interfac/iroom';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnChanges ,OnInit{
@Input() landingItem:IRoom[]|any;
@Input() totalCountL:IRoom|any;
@Input ()landingFun:any;
@Input ()landingRoom:any;
@Input() landPge:any


constructor(private _LandingService:LandingService){
  
  
  
}
ngOnInit(): void {
  console.log(this.landingItem);

}
ngOnChanges(){
//  console.log(this.landingItem);
 
}

mxm(){
  
}


}
