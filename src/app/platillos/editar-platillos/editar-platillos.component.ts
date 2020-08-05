import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { PlatilloModel } from '../../models/platillo';
import { PlatilloService } from '../../services/platillo/platillo.service';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showCancelButton: false,
  timer: 3000
})


@Component({
  selector: 'app-editar-platillos',
  templateUrl: './editar-platillos.component.html',
  styleUrls: ['./editar-platillos.component.css']
})
export class EditarPlatillosComponent implements OnInit {


  editarPlatillos = true;
  InsertarPlatillos = false;
  idPlatillo: string;
  @Input() set idPlatillos (value){

  this.idPlatillo = value;
  this.ngOnInit();
  }

  @Output() cancelarEditar = new EventEmitter();

  platillo: PlatilloModel = new PlatilloModel();
  constructor(private PlatilloService: PlatilloService) { }

  ngOnInit(): void {
    this.PlatilloService.obtenerPlatillosid(this.idPlatillo).then((resp: any) => {
      // console.log(this.idCategoria);
      this.platillo = resp.cont;
    }).catch((err) => {
      Toast.fire({
        icon: 'error',
        title: err.error.msg
      })
    })
  }

  editarCategoria(){
    this.PlatilloService.actualizarPlatillos(this.idPlatillo, this.platillo).then((resp: any) => {
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
