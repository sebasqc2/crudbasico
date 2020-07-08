import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { CrudServiceService } from '../crud-service.service';
import { TokenStorageService } from './../shared/storage-services/token-storage.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  model = new Alumno();

  constructor(private crudServices: CrudServiceService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(JSON.stringify(this.model));
    this.crudServices.createModel('estudiantes', this.model).subscribe( );

  }

  newAlumno(){
    this.model = new Alumno();

  }

}
