import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SongCardComponent } from './song-card/song-card.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    HomePageComponent,
    SongCardComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule { }
