import { Component, OnInit,Input } from '@angular/core';
import { Alumno } from '../alumno';
import { CrudServiceService } from '../crud-service.service';
import { GenericResponseModel } from '../generic.response.model';
import { InfoMessagesService } from '../info-messages.service';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  model = new Alumno();
  private estudianteList = new Alumno();


  constructor(private crudServices: CrudServiceService,
  private messageService: InfoMessagesService) { }

  ngOnInit() {
  }

  onSubmit(){
  this.getEstudiante();
  }



  getEstudiante() {
    this.estudianteList = new Alumno();
    this.crudServices.getModel('estudiantes?codigo=' + this.model.codigo).subscribe(
     data =>{
       if(JSON.stringify(data) === '[]' ){
          this.model = new Alumno();
          this.messageService.getInfoMessagePersonalized('warning','Codigo no Registrado','ATENCIÖN');
       }else{
          this.estudianteList.codigo = data[0].codigo;
          this.estudianteList.nombre = data[0].nombre;
          this.estudianteList.apellido = data[0].apellido;
          this.estudianteList.correo = data[0].correo;
          this.model = this.estudianteList;
         }
      }
    );

  }

  newAlumno(){
    this.model = new Alumno();

  }

}
