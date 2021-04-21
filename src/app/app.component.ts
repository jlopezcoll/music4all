import { Component } from '@angular/core';
import { Song } from './interfaces/song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music 4all';

  cancionSeleccionada?: Song;

  mostrarDetalles(cancion) {
    this.cancionSeleccionada = cancion;
  }
}
