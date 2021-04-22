import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

 @Input('songInput') song_;

  constructor() { }

  ngOnInit(): void {
  }

}
