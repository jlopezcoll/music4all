import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CancionComponent } from './cancion/cancion.component';
import { CancionDetalleComponent } from './cancion-detalle/cancion-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    CancionDetalleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
