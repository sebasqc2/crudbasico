import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ContactoseditComponent } from './components/contactosedit/contactosedit.component';

const app_routes: Routes = [
    {path: 'contactos', component: ContactosComponent},
    {path: 'contactosedit/:id', component: ContactoseditComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'contactos'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);