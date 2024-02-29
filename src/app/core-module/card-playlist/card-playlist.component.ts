import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-playlist',
  templateUrl: './card-playlist.component.html',
  styleUrl: './card-playlist.component.scss'
})
export class CardPlaylistComponent {
  SongCardData:any
  imgpath:any

  constructor(
    private activeRoute: ActivatedRoute,
  ){
  this.activeRoute.queryParamMap.subscribe((param: any) => {
    if (param && param.params && param.params.playlistDetails) {
      this.SongCardData = JSON.parse(param.params.playlistDetails)
      console.log(this.SongCardData,"this is song card data");
      
       this.imgpath = this.SongCardData.imageUrl
    }
    })
}
}
