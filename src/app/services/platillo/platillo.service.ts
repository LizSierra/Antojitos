import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { PlatilloModel } from '../../models/platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {
  url = `${environment.urlLocal}platillo`;

  constructor(private http: HttpClient) { }

  obtenerPlatillos(){
    return this.http.get(`${this.url}/`).toPromise();
  }
  
  obtenerPlatillosid(idPlatillo: String) {
    return this.http.get(`${this.url}/obtener/${idPlatillo}`).toPromise();
   }
   
   registrarPlatillos(platillo: PlatilloModel) {
     return this.http.post(`${this.url}/registrar`, platillo).toPromise();
   }

   actualizarPlatillos(idPlatillo: String, platillo: PlatilloModel) {
     return this.http.put(`${this.url}/modificar/${idPlatillo}`, platillo ).toPromise();
   }
   eliminarPlatillos(idPlatillo: String) {
    return this.http.patch(`${this.url}/eliminar/${idPlatillo}`,{} ).toPromise();
  }
   
}
