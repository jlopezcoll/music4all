import { Component, OnInit } from '@angular/core';

import { Cancion } from '../cancion';
import { CANCIONES } from '../lista-canciones';


@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {


  Canciones = CANCIONES;//array de canciones

  cancionSelecionada: Cancion;



  constructor() { }

  ngOnInit(): void {
  }
  onSelectCancion (cancion:Cancion):void{ //seleccion del evento
    console.log("Cancion selecionada= "+cancion.title);
    this.cancionSelecionada = cancion;
  }

}
