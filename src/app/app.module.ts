import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { SongCardComponent } from './dashboard/song-card/song-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    SongCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
