import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarsModule'
  },
  {
    path: 'chat',
    loadChildren: './chat/chat.module#ChatModule'
  },
  {
    path: 'modulos',
    loadChildren: './modules/modules.module#ModulesModule'
  },
  {
    path: 'planes',
    loadChildren: './plans/plans.module#PlansModule'
  },
  {
    path: 'perfiles',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'menus',
    loadChildren: './menucomponent/menucomponent.module#MenucomponentModule'
  },
  {
    path: 'usuarios',
    loadChildren: './usercomponents/crud-user.module#CrudUserModule'
  },
  {
    path: 'maestros',
    loadChildren: './masters/masters.module#MastersModule'
  },
  {
    path: 'industrias',
    loadChildren: './company/company.module#CompanyModule'
  },
  {
    path: 'novedades',
    loadChildren: './novelties/novelties.module#NoveltiesModule'
  },
  {
    path: 'profesionales',
    loadChildren: './professional/professional.module#ProfessionalModule'
  }
];
