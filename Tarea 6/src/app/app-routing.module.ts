import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CursosCertificacionesComponent } from './cursos-certificaciones/cursos-certificaciones.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'cursos-certificaciones', component: CursosCertificacionesComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

