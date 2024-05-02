import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { PaymentComponent } from './components/payment/payment.component';


import {
  StripeCardComponent,
  StripeCardNumberComponent,
  StripeCardExpiryComponent,
  StripeCardCvcComponent
} from 'ngx-stripe' 
import { NgxStripeModule } from 'ngx-stripe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    HomeComponent,
    FavoritesComponent,
    ExploreComponent,
    ReviewsComponent,

    RoomDetailsComponent,
    PaymentComponent,



    FooterComponent




  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,



    NgxStripeModule.forRoot('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'),
  
    MatDatepickerModule,
    MatNativeDateModule,


  ],
  exports:[
    
    MatDatepickerModule,
    MatNativeDateModule,

  ]
})
export class LandingPageModule { }
