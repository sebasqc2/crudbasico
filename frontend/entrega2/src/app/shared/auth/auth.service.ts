import { GenericResponseModel } from './../../../models/response/generic.response.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { TokenStorageService } from '../storage-services/token-storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudServiceService } from './../backend/cruds/crud-service.service';

@Injectable({ providedIn: 'root' })

export class AuthService {
  errorMessage: string;

  headers = {
    'Authorization': `Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==`
  }

  token: TokenStorageService;
  private serverURL = environment.serverUrl;

  constructor(private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private crudServices: CrudServiceService,
  ) {
    this.isAuthenticated()
  }

  async buildHeaderAuthenticated() {
    this.headers = {
      'Authorization': this.tokenStorage.getToken() + ''
    };
  }

  logout() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  attemptAuth(path, credentials): Observable<any> {
    this.headers = {
      'Authorization': `Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==`
    }
    return this.http.post<any>(`${this.serverURL}${path}`, credentials, { headers: this.headers });
  }

  isAuthenticated() {
    if (this.tokenStorage.getToken() != null) {
      this.buildHeaderAuthenticated();
      return true;
    } else {
      return false;
    }
  }

  async getInfoUserAuthenticated() {
    this.crudServices.getModel('api/usuarios/obtener-info-usuario-autenticado').subscribe(
      (genericResponse: GenericResponseModel) => {
        if (genericResponse.code === 200) {
          this.tokenStorage.saveAuthorities(genericResponse.genericObject.roleId.name);
          this.tokenStorage.saveCompleteName(genericResponse.genericObject.completeName);
          this.tokenStorage.saveID(genericResponse.genericObject.id);
          if (genericResponse.genericObject.companyId != null) {
            this.tokenStorage.saveIdCompany(genericResponse.genericObject.companyId.id);
          }
          this.tokenStorage.saveUsername(genericResponse.genericObject.email);
        }
      }, error => {
        this.errorMessage = 'Credenciales incorrectas';
      }
    );

  }


}
