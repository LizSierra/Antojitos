import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { CategoriaModel } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria/categoria.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showCancelButton: false,
  timer: 3000
})

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent implements OnInit {


  editarCategorias = true;
  insertarCategorias = false;
  idCategoria: string;
  @Input() set idCategorias (value){

  this.idCategoria = value;
  this.ngOnInit();
  }

  @Output() cancelarEditar = new EventEmitter();

  categoria: CategoriaModel = new CategoriaModel();
  constructor(private CategoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.CategoriaService.obtenerCategoriasid(this.idCategoria).then((resp: any) => {
      // console.log(this.idCategoria);
      this.categoria = resp.cont;
    }).catch((err) => {
      Toast.fire({
        icon: 'error',
        title: err.error.msg
      })
    })
  }

  editarCategoria(){
    this.CategoriaService.actualizarCategorias(this.idCategoria, this.categoria).then((resp: any) => {
      Toast.fire('Se actualizo correctamente la categoria.')
      this.cancelarEditar.emit(true);
      
      }).catch((err: any) => {
        Toast.fire({
          icon: 'error',
          title: err.error.msg
        });
        this.cancelarEditar.emit();
    });
    
  this.ngOnInit();
  }

  cancelar(){
    this.cancelarEditar.emit(false);
  }

}
