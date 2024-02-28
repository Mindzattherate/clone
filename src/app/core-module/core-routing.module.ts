import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from '../dashboard/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'home-page', component: HomePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
