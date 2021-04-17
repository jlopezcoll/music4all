import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CancionComponent } from './cancion/cancion.component';
import { ListadoCancionesComponent } from './listado-canciones/listado-canciones.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ReproductorComponent } from './reproductor/reproductor.component';


@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    ListadoCancionesComponent,
    FiltroPipe,
    ReproductorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
