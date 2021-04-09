import { Component, OnInit } from '@angular/core';

import { Song } from '../interfaces/song';
import { SONGLIST } from '../mock-song-list';


@Component({
  selector: 'app-listado-canciones',
  templateUrl: './listado-canciones.component.html',
  styleUrls: ['./listado-canciones.component.css']
})
export class ListadoCancionesComponent implements OnInit {

songs: Song[] = SONGLIST;
selectedSong?: Song;

  onSelect(listedSong: Song): void {
     this.selectedSong = listedSong;
   }

  constructor() { }

  ngOnInit() {
  }

}