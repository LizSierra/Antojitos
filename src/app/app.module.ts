import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InsertarPlatillosComponent } from './platillos/insertar-platillos/insertar-platillos.component';
import { InsertarCategoriasComponent } from './categoria/insertar-categorias/insertar-categorias.component';
import { EditarPlatillosComponent } from './platillos/editar-platillos/editar-platillos.component';
import { EditarCategoriasComponent } from './categoria/editar-categorias/editar-categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    PlatillosComponent,
    InicioComponent,
    InsertarPlatillosComponent,
    InsertarCategoriasComponent,
    EditarPlatillosComponent,
    EditarCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
