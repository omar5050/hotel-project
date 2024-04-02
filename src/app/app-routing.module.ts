import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../app/modules/auth/auth/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },


  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
