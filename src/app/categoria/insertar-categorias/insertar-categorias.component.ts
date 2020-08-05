import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { CategoriaModel } from '../../models/categoria';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
 

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-insertar-categorias',
  templateUrl: './insertar-categorias.component.html',
  styleUrls: ['./insertar-categorias.component.css']
})
export class InsertarCategoriasComponent implements OnInit {

@Input() componentes;
@Input() idCategorias;
@Output() salida = new EventEmitter();
@Output() terminarActualizacion = new EventEmitter();


categorias: CategoriaModel = new CategoriaModel();
  constructor(private CategoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  registrarCategorias(forma: NgForm){
    this.CategoriaService.registrarCategorias(this.categorias).then((resp: any) => {
      this.terminarActualizacion.emit();
      Toast.fire('Se agrego correctamente', '', 'success');
      this.CategoriaService.obtenerCategorias().then((salarios: any) => {
        
      });
      

  }).catch((err) => {
    Toast.fire({
    icon: 'error',
    title: err.error.msg
    });
  });

}
}
