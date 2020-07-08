import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleAuthGuard } from 'app/shared/auth/roleAuth-guard.service';
import { NewFileComponent } from './new-file/new-file.component';
import { MapViewComponent } from './map-view/map-view.component';
import { ListFilesComponent } from './list-files/list-files.component';




const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'nuevo-archivo',
        component: NewFileComponent,
        data: {
          title: 'Nuevo Archivo',
          expectedRole: ['ROLE_SUPER', 'ROLE_ADMIN']
        },
        canActivate: [RoleAuthGuard]
      },
      {
        path: 'listar-archivos',
        component: ListFilesComponent,
        data: {
          title: 'Listar Archivor',
          expectedRole: ['ROLE_SUPER', 'ROLE_ADMIN']
        },
        canActivate: [RoleAuthGuard]
      },
      {
        path: 'ver-mapa',
        component: MapViewComponent,
        data: {
          title: 'Vista de mapa',
          expectedRole: ['ROLE_SUPER', 'ROLE_ADMIN']
        },
        canActivate: [RoleAuthGuard]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [RoleAuthGuard],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
