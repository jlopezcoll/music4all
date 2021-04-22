import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

// Interfaces
import { Song } from '../../interfaces/song';
import { StreamState } from '../../interfaces/stream-state';
// Servicios
import { AudioService } from '../../services/audio.service';
import { SongService } from '../../services/song.service';


@Component({
  selector: 'app-listado-canciones',
  templateUrl: './listado-canciones.component.html',
  styleUrls: ['./listado-canciones.component.css']
})
export class ListadoCancionesComponent implements OnInit {
  
  @Output() cancionSeleccionada = new EventEmitter<Song>();

  songs?: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  cancionFiltrada: string = '';

  constructor(public audioService: AudioService, 
              public songService: SongService) {
    // suscribe a las canciones del servicio
    songService.getFiles().subscribe(songs => {
      this.songs = songs;
    });

    // suscribe al estado del stream
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit() {
  }

  // Selección
  onSelect(song): void {
    this.cancionSeleccionada.emit(song);
  }

  // Dispara Play al seleccionar canción
  onOpenFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }
  
  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
    });
  }
  

}
