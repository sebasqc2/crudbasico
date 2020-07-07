import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  private serverURL = environment.serverUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  buildHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Authorization': this.token.getToken()
      })
    };
  }

  public createModelWA(path, model): Observable<any> {
    return this.http.post<any>(`${this.serverURL}${path}`, model, { headers: this.httpOptions.headers});
  }

  public getModelWA(path): Observable<any> {
    return this.http.get<any>(`${this.serverURL}${path}`, { headers: this.httpOptions.headers});
  }

  public createModel(path, model): Observable<any> {
    return this.http.post<any>(`${this.serverURL}${path}`, model, this.httpOptions);
  }

  public createActivitie(path, model): Observable<any> {
    this.buildHeaders();
    return this.http.post<any>(`${this.serverURL}${path}`, model, this.httpOptions);
  }

  public createModelParams(path, model, params): Observable<any> {
    return this.http.post<any>(`${this.serverURL}${path}`, model, { headers: this.httpOptions.headers, params: params });
  }

  public putModelParams(path, model, params): Observable<any> {
    return this.http.put<any>(`${this.serverURL}${path}`, model, { headers: this.httpOptions.headers, params: params });
  }

  public putModel(path, model): Observable<any> {
    return this.http.put<any>(`${this.serverURL}${path}`, model, { headers: this.httpOptions.headers });
  }

  public getModel(path): Observable<any> {
    this.buildHeaders()
    return this.http.get<any>(`${this.serverURL}${path}`, this.httpOptions);
  }
  public getModelModel(path, model): Observable<any> {
    return this.http.post<any>(`${this.serverURL}${path}`, model, { headers: this.httpOptions.headers });
  }

  public getModelModelParams(path, model, params): Observable<any> {
    return this.http.post<any>(`${this.serverURL}${path}`, model, { headers: this.httpOptions.headers, params: params });
  }
  public deleteModel(path): Observable<any> {
    return this.http.delete<any>(`${this.serverURL}${path}`, this.httpOptions);
  }

  public deleteModelWA(path): Observable<any> {
    return this.http.delete<any>(`${this.serverURL}${path}`, {});
  }


}
