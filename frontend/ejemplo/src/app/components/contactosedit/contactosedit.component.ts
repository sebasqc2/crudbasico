import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Contacto} from '../../interfaces/contacto.interface';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-contactosedit',
  templateUrl: './contactosedit.component.html',
  styles: [
  ]
})
export class ContactoseditComponent implements OnInit {
  contacto:Contacto = {
    nombre:"",
    telefono:"",
    email:"",
    categoria:"Trabajo"    
  }

  constructor( private _contactoService: ContactosService) { }

  ngOnInit(): void {
  }
  guardar(){
    console.log(this.contacto);
    this._contactoService.nuevoContacto(this.contacto)
      .subscribe(data=>{
        
      })
  }

}
