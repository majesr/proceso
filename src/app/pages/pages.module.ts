import { NgModule } from '@angular/core';

import { PedidosComponent } from './pedidos/pedidos.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ServiciosComponent } from './servicios/servicios.component';
import {InicioComponent} from './inicio/inicio.component';
import { PagesComponent } from './pages.component';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    CategoriasComponent,
    ServiciosComponent,
    PedidosComponent,
    OrdenesComponent
  ],
  exports: [
    InicioComponent,
    CategoriasComponent,
    ServiciosComponent,
    PedidosComponent,
    OrdenesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PagesModule{

}
