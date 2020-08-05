import { Component, OnInit, Input } from '@angular/core';
import { PlatilloService } from '../services/platillo/platillo.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { from } from 'rxjs';

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

  @Input() idCategoria;
  registrarPlatillos: boolean = true;
  actualizarPlatillos: boolean = false;
  platillos: any;
  idPlatillos: string;
  idCategorias: string;
  arraPlatillos = [];
  arraNewPlatillos = [];
  title: string;
  buscarTexto: string;
  constructor(private PlatilloService: PlatilloService, private activatedRouter: ActivatedRoute, private router: Router) { 
    this.idCategorias = activatedRouter.snapshot.params.idCategorias;

     }

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
    this.PlatilloService.obtenerPlatillosid(this.idCategorias).then((platillos: any) => {
    this.platillos = this.platillos.cont.platillos;
      
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
