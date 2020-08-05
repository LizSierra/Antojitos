import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { CategoriaModel } from '../../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = `${environment.urlLocal}categoria`;

  constructor(private http: HttpClient) { }

  obtenerCategorias(){
    return this.http.get(`${this.url}/`).toPromise();
  }
  
  obtenerCategoriasid(idCategoria: String) {
    return this.http.get(`${this.url}/obtener/${idCategoria}`).toPromise();
   }
   
   registrarCategorias(categoria: CategoriaModel) {
     return this.http.post(`${this.url}/registrar`, categoria).toPromise();
   }

   actualizarCategorias(idCategoria: String, categoria: CategoriaModel) {
     return this.http.put(`${this.url}/modificar/${idCategoria}`, categoria ).toPromise();
   }
   eliminarCategoria(idCategoria: String) {
    return this.http.patch(`${this.url}/eliminar/${idCategoria}`,{} ).toPromise();
  }
   
}
