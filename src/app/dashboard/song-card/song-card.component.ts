import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss',
})
export class SongCardComponent {
  @Input() song: any;

  constructor(
    private router: Router,
  ){}

  onCardClick() { 
    debugger
    const navigationExtras: NavigationExtras = {
      queryParams: { playlistDetails: JSON.stringify(this.song) },
      skipLocationChange: true,
    };
    this.router.navigate(['/home/playlist'], navigationExtras);
  }
}
