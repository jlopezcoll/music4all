import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Song } from '../interfaces/song';
import { SONGLIST } from '../mock-song-list';


@Component({
  selector: 'app-listado-canciones',
  templateUrl: './listado-canciones.component.html',
  styleUrls: ['./listado-canciones.component.css']
})
export class ListadoCancionesComponent implements OnInit {

  @Output() cancionSeleccionada = new EventEmitter<Song>();

  songsData: Song[] = SONGLIST;
  cancionFiltrada: string = '';
  
  // canciones mostradas
  songs?: Song[];
  
  
  constructor() { }
  
  ngOnInit() {
    this.displayList()
  }

  onSelect(song): void {
    this.cancionSeleccionada.emit(song);
  }

  displayList(): void {
    this.songs = this.songsData.filter((song) => {
      if (song) {
        return song;
      }
    })
  }

}
