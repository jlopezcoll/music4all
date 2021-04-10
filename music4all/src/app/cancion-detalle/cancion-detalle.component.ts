import { Component, Input, OnInit } from '@angular/core'; //libreria imput para comuniicacion entre
import { Cancion } from '../cancion'; //importamos la clase cancion para hacer uso


@Component({
  selector: 'app-cancion-detalle',
  templateUrl: './cancion-detalle.component.html',
  styleUrls: ['./cancion-detalle.component.css']
})
export class CancionDetalleComponent implements OnInit {


  @Input() cancion: Cancion;


  constructor() { }

  ngOnInit(): void {
  }

}
