import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent, children: [

      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'explore', component: ExploreComponent },
      { path: 'fav', component: FavoritesComponent },

      { path: 'fav/:id', component: FavoritesComponent },
      { path: 'review', component: ReviewsComponent },
      { path: 'roomdetails/:id', component: RoomDetailsComponent },





    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
