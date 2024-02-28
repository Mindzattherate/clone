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
    { title: 'Song 3', artist: 'Artist 3', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 4', artist: 'Artist 4', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 5', artist: 'Artist 5', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 6', artist: 'Artist 6', imageUrl: "https://picsum.photos/200" },
    { title: 'Song 7', artist: 'Artist 7', imageUrl: "https://picsum.photos/200" },
    // Add more songs as needed
  ];
}
