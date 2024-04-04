import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent ,children:[

{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'',component:HomeComponent},
{path:'explore',component:ExploreComponent},
{path:'fav',component:FavoritesComponent},
{path:'review',component:ReviewsComponent},





  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
