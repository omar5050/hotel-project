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

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    HomeComponent,
    FavoritesComponent,
    ExploreComponent,
    ReviewsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class LandingPageModule { }
