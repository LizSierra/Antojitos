import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria/categoria.service';
// import { PdfServiceService } from '../../services/PDF/pdf-service.service';
// import { ExportDataService } from 'src/app/services/export-data/export-data.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  registrarCategorias: boolean = true;
  actualizarCategorias: boolean = false;
  categorias: any;
  idCategorias: string;
  arraCategorias = [];
  arraNewCategorias = [];
  title: string;
  buscarTexto: string;
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.arraCategorias = [];
  }
  mostrarEditar(idCategorias: string){
    this.idCategorias = idCategorias;
    this.actualizarCategorias = true;
    this.registrarCategorias = false;

  }
  cancelarEditar(event) {
    console.log(event);
this.ngOnInit();
this.actualizarCategorias = false;
this.registrarCategorias = true;
  }


  obtenerCategorias() {
    this.arraCategorias = [];
    this.categoriaService.obtenerCategorias().then((salarios: any) => {
      
      this.categorias = salarios.cont;
      
      for (const categoria of this.categorias){
        let element = [

          categoria.strNombre.replace(/\:null/gi,':""'),
          categoria.strDescripcion.replace(/\:null/gi,':""'),
          categoria.blnActivo ? 'Sí' : 'No',

        ];
        this.arraCategorias.push(element);
        this.arraNewCategorias = this.arraCategorias;
      }
    }).catch((err: any) => {
      
      Toast.fire({
            icon: 'error',
            title: err.error.msg
            });
      this.categorias = [];
    });
  }

  desactivarCategoria(id: string){
this.categoriaService.eliminarCategoria(id).then((data: any) => {
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
