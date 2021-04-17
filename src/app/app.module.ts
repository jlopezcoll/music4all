import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CancionComponent } from './cancion/cancion.component';
import { ListadoCancionesComponent } from './listado-canciones/listado-canciones.component';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    ListadoCancionesComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
