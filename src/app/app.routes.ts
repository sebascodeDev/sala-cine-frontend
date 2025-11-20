import { Routes } from '@angular/router';
import { Login as LoginComponent } from './auth/login/login';
import { Dashboard as DashboardComponent } from './dashboard/dashboard/dashboard';
import { List as PeliculasListComponent } from './peliculas/list/list';
import { Edit as PeliculaEditComponent } from './peliculas/edit/edit';
import { List as SalasListComponent } from './salas/list/list';
import { Edit as SalaEditComponent } from './salas/edit/edit';
import { Asignar as AsignarComponent } from './asignaciones/asignar/asignar';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'peliculas', component: PeliculasListComponent },
  { path: 'peliculas/nuevo', component: PeliculaEditComponent },
  { path: 'peliculas/:id', component: PeliculaEditComponent },
  { path: 'salas', component: SalasListComponent },
  { path: 'salas/nuevo', component: SalaEditComponent },
  { path: 'salas/:id', component: SalaEditComponent },
  { path: 'asignaciones', component: AsignarComponent }
];
