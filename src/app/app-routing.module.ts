import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'final', component: FinalComponent },
  { path: '**', redirectTo: '' } //will be redirect to failure - must always be the latest route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
