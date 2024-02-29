import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CardPlaylistComponent } from './card-playlist/card-playlist.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    CardPlaylistComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CoreModule { }
