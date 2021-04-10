import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CancionComponent } from './cancion/cancion.component';
import { ListadoCancionesComponent } from './listado-canciones/listado-canciones.component';


@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    ListadoCancionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
