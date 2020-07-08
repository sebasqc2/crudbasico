import { InfoMessagesService } from './../messages/info-messages.service';
import { CrudServiceService } from './../backend/cruds/crud-service.service';
import { TokenStorageService } from 'app/shared/storage-services/token-storage.service';
import { CompanyModel } from '../../../models/entities/company-model';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
// Tener en cuenta en esta clase las rutas cuando el token no está expirado, esta clase
// permitirá además el enrutamiento entre las páginas cuando el usuario este logueado.

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';



@Injectable()
export class AuthGuard implements CanActivate {
  company: CompanyModel;
  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      if (this.tokenStorage.getAuthorities() === 'ROLE_ADMIN') {
        this.router.navigate(['dashboard/dashboard1']);
      } else if (this.tokenStorage.getAuthorities() === 'ROLE_SUPER') {
        this.router.navigate(['usuarios/listar-usuarios']);
      } else {
        this.router.navigate(['dashboard/dashboard1']);

      }
      return false;
    } else {
      return true;
    }
  }

}

