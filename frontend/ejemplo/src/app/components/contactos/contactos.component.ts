import { Component, OnInit } from '@angular/core';
import {ContactoService}}  from '../../services/contactos.service'

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styles: [
  ]
})
export class ContactosComponent implements OnInit {

  listaContactos = [];

  constructor() { }

  ngOnInit(): void {
  }

}
