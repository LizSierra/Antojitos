import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InsertarPlatillosComponent } from './platillos/insertar-platillos/insertar-platillos.component';
import { InsertarCategoriasComponent } from './categoria/insertar-categorias/insertar-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    PlatillosComponent,
    InicioComponent,
    InsertarPlatillosComponent,
    InsertarCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
