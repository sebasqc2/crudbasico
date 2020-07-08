import { AuthResponseModel } from './../../../models/response/auth-response-model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../storage-services/token-storage.service';
import { InfoMessagesService } from '../messages/info-messages.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleServicesService {

  constructor(
    private messageService: InfoMessagesService,
    public tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private router: Router
  ) { }

  async handleError(errorToHandle) {

    if (errorToHandle.error.error === 'access_denied') {
      this.messageService.getInfoMessagePersonalized(
        'error', 'Por favor contacte al administrador.', 'No puedes acceder a estos servicios'
      )
    } else if (errorToHandle.error.error === 'invalid_token') {

      const formToSend = await new FormData();
      formToSend.append('refresh_token', this.tokenStorageService.getRefreshToken());
      formToSend.append('grant_type', 'refresh_token');
      formToSend.append('client_id', 'spring-security-oauth2-read-write-client');

      this.authService.attemptAuth('oauth/token', formToSend).subscribe(
        (authResponse: AuthResponseModel) => {
          this.tokenStorageService.saveToken(authResponse.token_type + ' ' + authResponse.access_token);
          this.tokenStorageService.saveToken_type(authResponse.token_type);
          this.tokenStorageService.saveRefreshToken(authResponse.refresh_token);
          this.authService.getInfoUserAuthenticated()
          setTimeout(() => {
            this.messageService.getInfoMessagePersonalized('success',
              `Ya has estado trabajando un buen rato,
             a continuación refrescaremos la página para brindarte más seguridad.`, '¡Cuidamos tu seguridad!').then(
                (result) => {
                  this.reloadPage();
                }
              )
          }, 3000);
        },
        error => {
          this.messageService.getInfoMessagePersonalized('warning',
            `Hemos detectado una actualización en el sistema,
                por su seguridad lo redireccionaremos al
                inicio de sesión para corregir cualquier inconsistencia.`, 'ups... tenemos un problema.').then(
              (result) => {
                this.tokenStorageService.signOut();
                this.router.navigate(['pages/auth']);
              }
            )
        }
      );
    } else {
      this.messageService.getInfoMessagePersonalized('warning',
        errorToHandle.error.answer, 'ups... tenemos un problema.');
    }
  }

  reloadPage() {
    window.location.reload();
  }

}
