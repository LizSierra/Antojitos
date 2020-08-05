import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PlatilloModel } from '../../models/platillo';
import { PlatilloService } from '../../services/platillo/platillo.service';
import Swal from 'sweetalert2';

import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});


@Component({
  selector: 'app-insertar-platillos',
  templateUrl: './insertar-platillos.component.html',
  styleUrls: ['./insertar-platillos.component.css']
})
export class InsertarPlatillosComponent implements OnInit {

  @Input() componentes;
  @Input() idPlatillos;
  @Output() salida = new EventEmitter();
  @Output() terminarActualizacion = new EventEmitter();
  
  
  platillos: PlatilloModel = new PlatilloModel();
    constructor(private PlatilloService: PlatilloService) { }
  
    ngOnInit(): void {
    }
  
    registrarPlatillos(forma: NgForm){
      this.PlatilloService.registrarPlatillos(this.platillos).then((resp: any) => {
        this.terminarActualizacion.emit();
        Toast.fire('Se agrego correctamente', '', 'success');
        this.PlatilloService.obtenerPlatillos().then((platillos: any) => {
          
        });
        
  
    }).catch((err) => {
      Toast.fire({
      icon: 'error',
      title: err.error.msg
      });
    });
  
  }
  }
  