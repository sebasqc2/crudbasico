import { GenericResponseModel } from './../../../../models/response/generic.response.model';
import { MasterValueModel } from './../../../../models/entities/master-value-model';
import { RelationalFileModel } from './../../../../models/utilities/firebase-files/relational-file-model';

import { HandleServicesService } from './../../handle/handle-services.service';
import { CrudServiceService } from 'app/shared/backend/cruds/crud-service.service';
import { InfoMessagesService } from 'app/shared/messages/info-messages.service';
import { FirebaseStorageService } from 'app/shared/firebase/firebase-storage.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
import { FileModel } from 'models/entities/file-model';
import { TokenStorageService } from 'app/shared/storage-services/token-storage.service';

@Component({
  selector: 'app-new-file',
  templateUrl: './new-file.component.html',
  styleUrls: ['./new-file.component.scss']
})
export class NewFileComponent implements OnInit {

  @Input() relationalFileCompose: RelationalFileModel = new RelationalFileModel();
  @Output() emit: EventEmitter<any> = new EventEmitter();
  fileModel: FileModel = new FileModel();
  selectedExtension = '';
  selectedFiles: any = undefined;
  stringAccept = '';
  canShowLoading = false;
  fileTypeList: Array<MasterValueModel> = new Array();
  relationalRestrictions: Array<string> = new Array();

  constructor(
    private firebaseStorageService: FirebaseStorageService,
    private crudService: CrudServiceService,
    private messageService: InfoMessagesService,
    private storageInfoCtrl: TokenStorageService,
    private handleService: HandleServicesService
  ) {
  }

  ngOnInit() {
    this.getFileTypes();
  }

  buildStringExtensions() {
    this.stringAccept = '';
    for (const ext of this.relationalRestrictions) {
      this.stringAccept = this.stringAccept + '.' + ext + ','
    }
    this.stringAccept = this.stringAccept.substring(0, this.stringAccept.length - 1)
  }

  getFileTypes() {
    this.fileTypeList = new Array();
    this.crudService.getModel('api/maestro-valor/ver-por-objetivo?objetive=FILETYPE').subscribe(
      (genericResponse: GenericResponseModel) => {
        if (genericResponse.code === 200) {
          if (genericResponse.answerList.length > 0) {
            this.fileTypeList = genericResponse.answerList;
            this.fileModel.fileTypeId = this.fileTypeList[0];
            this.configRestrictionsByFileType();
          } else {
            this.messageService.getInfoMessagePersonalized('warning', 'Necesitara tipos de archivos',
              'Sin tipos de archivo')
          }
        }
        if (genericResponse.code === 400) {
          this.messageService.getInfoMessagePersonalized('warning', genericResponse.answer, 'Sin tipos de archivo')
        }
      },
      error => {
        this.handleService.handleError(error);
      }
    );
  }

  configRestrictionsByFileType() {
    if (this.fileModel.fileTypeId.name === 'IMAGEN') {
      this.relationalRestrictions = ['jpg', 'jpeg', 'png'];
      this.buildStringExtensions();
    }
    if (this.fileModel.fileTypeId.name === 'DOCUMENTO') {
      this.relationalRestrictions = ['pdf', 'xdoc'];
      this.buildStringExtensions();
    }
    if (this.fileModel.fileTypeId.name === 'AUDIO') {
      this.relationalRestrictions = ['mp3'];
      this.buildStringExtensions();
    }
    if (this.fileModel.fileTypeId.name === 'VIDEO') {
      this.relationalRestrictions = ['mp4'];
      this.buildStringExtensions();
    }
  }

  uploadFile(): Promise<any> {
    return new Promise((resolve, reject) => {
      const realTimeUpload = new Date().getTime()
      const folderPath = this.storageInfoCtrl.getCompanyId() + '/' + this.relationalFileCompose.relationalTypeId.name
        + '/' + this.relationalFileCompose.relationalId + '/'
        + this.fileModel.fileTypeId.name + '/';
      this.fileModel.fileName = this.fileModel.fileName.trim() + '-' + realTimeUpload + '.' + this.selectedExtension;
      this.fileModel.pathFirebaseFile = folderPath + this.fileModel.fileName;
      this.firebaseStorageService.uploadFile(folderPath, this.fileModel.fileName, this.selectedFiles).then(
        (responseFirebase) => {
          this.firebaseStorageService.loadFile(folderPath, this.fileModel.fileName).then(
            (dowloadURL) => {
              resolve(dowloadURL)
            }
          ).catch(error => {
            this.handleService.handleError(error);
            reject(error)
          })
        }, (error) => {
          this.handleService.handleError(error);
          reject(error)
        })
    })
  }

  onSubmit() {
    this.canShowLoading = true;
    this.uploadFile().then((urlResult) => {
      this.fileModel.downloadUrl = urlResult
      this.fileModel.relationalTypeId = this.relationalFileCompose.relationalTypeId;
      this.fileModel.relationalId = this.relationalFileCompose.relationalId;
      this.crudService.createModel('api/archivos-firebase/crear', this.fileModel).subscribe(
        (genericResponse) => {
          if (genericResponse.code === 200) {
            this.messageService.getInfoMessageCreate().then(
              (response) => {
                this.selectFile = undefined;
                this.emit.emit(genericResponse.genericObject);
                this.canShowLoading = false;
              }
            )
          } else if (genericResponse.code === 400) {
            this.messageService.getInfoMessagePersonalized('warning', genericResponse.answer, 'No se pudo crear el archivo')
            this.canShowLoading = false;
          }
        }
      )
    }).catch((error) => {
      this.handleService.handleError(error);
      this.canShowLoading = false;
      this.emit.emit(0);
    })
  }

  closeModal() {
    this.emit.emit(0);
  }

  selectFile(event) {
    if ((Number(event.target.files.item(0).size) / 1000 / 1000) <= 10) {
      this.selectedFiles = event.target.files.item(0);
      if (this.relationalRestrictions.includes(this.selectedFiles.name.split('.').pop())) {
        this.selectedExtension = this.selectedFiles.name.split('.').pop()
      } else {
        this.selectedFiles = undefined;
        swal({
          title: 'El tipo de archivo seleccionado no es correcto', type: 'error',
          text: 'El archivo debe tener formato ' + this.stringAccept
        })
      }

    } else {
      this.selectedFiles = undefined;
      swal({
        title: 'El archivo es demasiado pesado', type: 'error',
        text: 'El archivo no puede pesar mas de 10mb'
      })
    }
  }

}
