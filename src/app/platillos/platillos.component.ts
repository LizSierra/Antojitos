import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../services/platillo/platillo.service';

import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {

  registrarPlatillos: boolean = true;
  actualizarPlatillos: boolean = false;
  platillos: any;
  idPlatillos: string;
  arraPlatillos = [];
  arraNewPlatillos = [];
  title: string;
  buscarTexto: string;
  constructor(private PlatilloService: PlatilloService) { }

  ngOnInit(): void {
    this.obtenerPlatillos();
    this.arraPlatillos = [];
  }
  mostrarEditar(idPlatillos: string){
    this.idPlatillos = idPlatillos;
    this.actualizarPlatillos = true;
    this.registrarPlatillos = false;

  }
  cancelarEditar(event) {
    console.log(event);
this.ngOnInit();
this.actualizarPlatillos = false;
this.registrarPlatillos = true;
  }


  obtenerPlatillos() {
    this.arraPlatillos = [];
    this.PlatilloService.obtenerPlatillos().then((platillos: any) => {
      
      this.platillos = platillos.cont;
      
      for (const platillo of this.platillos){
        let element = [

          platillo.idCategoria,
          platillo.strNombre.replace(/\:null/gi,':""'),
          platillo.strDescripcion.replace(/\:null/gi,':""'),
          platillo.strIngredientes.replace(/\:null/gi,':""'),
          platillo.nmbPiezas,
          platillo.nmbPrecio,
          platillo.blnActivo ? 'Sí' : 'No',
        ];
        this.arraPlatillos.push(element);
        this.arraNewPlatillos = this.arraPlatillos;
      }
    }).catch((err: any) => {
      
      Toast.fire({
            icon: 'error',
            title: err.error.msg
            });
      this.platillos = [];
    });
  }

  desactivarCategoria(id: string){
this.PlatilloService.eliminarPlatillos(id).then((data: any) => {
  const Nombre = data.cont.strNombre;
  console.log(Nombre);
  Toast.fire({
    icon: 'success',
    title: 'La categoria desactivo correctamente'
  });
  this.ngOnInit();
}).catch((err) => {
  Toast.fire({
    icon: 'error',
    title: err.error.msg
  })
})
  }
}
