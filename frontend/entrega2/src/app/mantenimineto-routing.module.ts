import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'estudiante',
        component: EstudianteComponent,
        data: {
          title: 'Estudiantes',
          expectedRole: ['ROLE_SUPER', 'ROLE_ADMIN']
        }
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenientoRoutingModule { }