import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { AudioService } from './services/audio.service';
import { SongService } from './services/song.service';
import { CancionComponent } from './components/cancion/cancion.component';
import { ListadoCancionesComponent } from './components/listado-canciones/listado-canciones.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';




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
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AudioService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
