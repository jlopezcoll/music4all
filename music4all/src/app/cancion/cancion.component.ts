import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  song = {
    track: 1,
    title: "Yesterday",
    composer: ["John Lennon", "Paul McCartney"],
    performer: ["The Beatles"],
    style: ["British Invasion", "Contemporary Pop/Rock", "Rock & Roll", "AM Pop", "Folk-Rock", "Psychedelic/Garage", "Soundtracks"],
    time: "02:05",
    year: "1965",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
