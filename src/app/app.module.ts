import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { AudioService } from './services/audio.service';
import { SongService } from './services/song.service';
import { CancionComponent } from './components/cancion/cancion.component';
import { ListadoCancionesComponent } from './components/listado-canciones/listado-canciones.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';



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
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [AudioService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
