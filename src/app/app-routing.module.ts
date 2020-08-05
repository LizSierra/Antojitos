import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { CategoriaComponent } from './categoria/categoria.component';



const routes: Routes = [
  
    {
      path: 'inicio', 
      component: InicioComponent,
    },
    { path: 'platillos/:idCategoria', 
    component: PlatillosComponent, 
    data: { titulo: 'platillos'}
  },
  { path: 'categorias', 
  component: CategoriaComponent, 
  data: { titulo: 'categorias'}
},
      
    {
      path: '', 
      redirectTo: '/inicio', 
      pathMatch: 'full'
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
