import { MasterValueModel } from './../../entities/master-value-model';
export class RelationalFileModel {
    // Id del objeto con el que se va a relacionar el adjunto
    relationalId: any;
    // Objeto maestro valor que sirve para definir a que tabla pertenece el id relacionado con el adjunto
    relationalTypeId: MasterValueModel;
    // Objetivo de la subida del archivo por ejemplo (Archivo anexo para novedad)
    relationalObjetive: any;
    // Indica al listado si debe mostrar el botón de creación de nuevo archivo o no
    showCreateButton: any;
    // Indica al listado si debe mostrar el titulo o no
    showTitle: any;
    // Indica el número máximo de archivos que pueden cargar para la referencia indicada
    maxNumberOfFiles: any;

    public constructor() {
        this.relationalId = 0;
        this.relationalTypeId = new MasterValueModel();
        this.relationalObjetive = '';
        this.showCreateButton = true;
        this.showTitle = true;
        this.maxNumberOfFiles = 10;
    }
}
