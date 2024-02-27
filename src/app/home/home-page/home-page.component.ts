import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  songs = [
    { title: 'Song 1', artist: 'Artist 1', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 2', artist: 'Artist 2', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 2', artist: 'Artist 2', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 2', artist: 'Artist 2', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 2', artist: 'Artist 2', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 2', artist: 'Artist 2', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 2', artist: 'Artist 2', imageUrl: "https://picsum.photos/200" },
    // Add more songs as needed
  ];
}
