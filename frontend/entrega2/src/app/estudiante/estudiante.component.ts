import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  model = new Alumno();

  //constructor(private crudServices: CrudServiceService) { }

  ngOnInit() {
  }

  onSubmit(){
    //this.crudServices.createModel('estudiantes', this.model).subscribe( );
  }

  newAlumno(){
    this.model = new Alumno();

  }

}
