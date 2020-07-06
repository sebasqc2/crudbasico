import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../interfaces/contacto.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private REST_API_SERVER = "http://localhost:1337/";
  constructor(private httpClient:HttpClient) { }

  public nuevoContacto(contacto:Contacto){
    let body = JSON.stringify(contacto);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post(this.contactosURL,body,headers)
      
  }
}
