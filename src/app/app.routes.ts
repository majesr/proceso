import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' }

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: NopagefoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });
