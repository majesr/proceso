import { RouterModule , Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ServiciosComponent } from './servicios/servicios.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' }

    ]
  }
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
