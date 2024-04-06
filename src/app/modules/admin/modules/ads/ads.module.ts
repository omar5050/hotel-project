import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { DeletAdsComponent } from './component/delet-ads/delet-ads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditAdsComponent } from './component/add-edit-ads/add-edit-ads.component';


@NgModule({
  declarations: [
    AdsComponent,
    DeletAdsComponent,
    AddEditAdsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule
  ]
})
export class AdsModule { }
