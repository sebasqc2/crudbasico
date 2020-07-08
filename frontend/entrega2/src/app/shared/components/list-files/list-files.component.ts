import { TokenStorageService } from './../../storage-services/token-storage.service';
import { HandleServicesService } from './../../handle/handle-services.service';
import { Component, OnInit, Input } from '@angular/core';
import { CrudServiceService } from 'app/shared/backend/cruds/crud-service.service';
import swal from 'sweetalert2';
import { FirebaseStorageService } from 'app/shared/firebase/firebase-storage.service';
import { GenericResponseModel } from 'models/response/generic.response.model';
import { InfoMessagesService } from 'app/shared/messages/info-messages.service';
import { FileModel } from 'models/entities/file-model';
import { RelationalFileModel } from 'models/utilities/firebase-files/relational-file-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewFileComponent } from '../new-file/new-file.component';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.scss']
})
export class ListFilesComponent implements OnInit {

  public canShowLoading = false;
  public listFiles: Array<FileModel> = new Array();
  public listFilesTemp: Array<FileModel> = new Array();
  @Input() relationalFileModel: RelationalFileModel = new RelationalFileModel();
  columnsFile = [
    { prop: 'id' },
    { prop: 'fileName' },
    { prop: 'downloadUrl' }
  ]

  constructor(
    private crudService: CrudServiceService,
    private firebaseServices: FirebaseStorageService,
    private messageService: InfoMessagesService,
    private modalService: NgbModal,
    private handleService: HandleServicesService,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit() {
    this.configFiles();
  }

  configFiles() {
    if (this.relationalFileModel.relationalId !== 0) {
      const url = 'api/archivos-firebase/listar-por-id-tipo?relationalId=' + this.relationalFileModel.relationalId +
        '&relationalTypeId=' + this.relationalFileModel.relationalTypeId.id;
      this.crudService.getModel(url).subscribe(
        (genericResponse: GenericResponseModel) => {
          if (genericResponse.code === 200) {
            this.listFiles = genericResponse.answerList;
            this.listFilesTemp = [...this.listFiles];
          } else {
            this.messageService.getInfoMessagePersonalized('warning',
              'Ocurrio un error cargando los archivos', 'Problema cargando archivos');
          }
        },
        error => {
          this.handleService.handleError(error);
        }
      )
    }
  }

  downloadFile(urlToDowload) {
    window.open(urlToDowload, '_blank')
  }


  deleteFile(fileToDelete: FileModel) {
    this.canShowLoading = true;
    const url = 'api/archivos-firebase/eliminar?firebaseFileId=' + fileToDelete.id;
    this.crudService.deleteModel(
      url
    ).subscribe((genericResponse: GenericResponseModel) => {
      if (genericResponse.code === 200) {
        this.firebaseServices.deleteFile(fileToDelete.pathFirebaseFile).then((data) => {
          this.messageService.getInfoMessageDelete();
          this.canShowLoading = false;
          this.configFiles();
        })
      } else {
        this.messageService.getInfoMessagePersonalized('warning', 'No se pudo eliminar la imagen', 'Algo salio mal');
        this.canShowLoading = false;
      }
    }, error => {
      this.handleService.handleError(error);
    })
  }

  deleteWarningFile(fileToDelete: FileModel) {
    swal({
      title: '¿Está seguro que desea eliminar el archivo?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.deleteFile(fileToDelete);
      }
    })
  }

  newFile() {
    const modal = this.modalService.open(NewFileComponent, {
      windowClass: 'modal', size: 'lg', backdrop: 'static'
    });
    modal.componentInstance.relationalFileCompose = this.relationalFileModel;
    modal.componentInstance.emit.subscribe((response) => {
      if (response !== 0) {
        this.configFiles();
        modal.close();
      } else {
        modal.close();
      }
    });
  }

  deleteAllFiles() {
    this.canShowLoading = true;
    const url = 'api/archivos-firebase/eliminar-por-id-tipo?relationalId=' + this.relationalFileModel.relationalId +
      '&relationalTypeId=' + this.relationalFileModel.relationalTypeId.id;
    this.crudService.deleteModel(
      url
    ).subscribe((genericResponse: GenericResponseModel) => {
      if (genericResponse.code === 200) {
        this.canShowLoading = false;
        this.messageService.getInfoMessageDelete();
        this.configFiles();
        this.listFiles.forEach(fileToDelete => {
          this.firebaseServices.deleteFile(fileToDelete.pathFirebaseFile)
        });
      } else {
        this.messageService.getInfoMessagePersonalized('warning', 'No se pudo eliminar la imagen', 'Algo salio mal');
        this.canShowLoading = false;
      }
    }, error => {
      this.handleService.handleError(error);
    })
  }

}
