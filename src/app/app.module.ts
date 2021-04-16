import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListadoCancionesComponent } from './components/listado-canciones/listado-canciones.component';
import { CancionComponent } from './components/cancion/cancion.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';

import { SongFilterPipe } from './pipes/song-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    ListadoCancionesComponent,
    ReproductorComponent,
    SongFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
