import { Component, OnInit } from '@angular/core';

import { Cancion } from '../cancion';
import { CANCIONES } from '../lista-canciones';


@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {


  Canciones = CANCIONES;





  constructor() { }

  ngOnInit(): void {
  }

}
