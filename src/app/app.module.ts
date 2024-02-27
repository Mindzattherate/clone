import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SongCardComponent } from './home/song-card/song-card.component';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    HomePageComponent,
    AppComponent,
    SongCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
