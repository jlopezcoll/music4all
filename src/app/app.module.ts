import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CancionComponent } from './cancion/cancion.component';
import { ListadoCancionesComponent } from './listado-canciones/listado-canciones.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    ListadoCancionesComponent,
    NameFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
