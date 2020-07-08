import { UserOAuthModel } from './user-o-auth-model';
import { MasterValueModel } from './master-value-model';
export class FileModel {
    id: number;
    fileName: string;
    downloadUrl: string;
    pathFirebaseFile: string;
    relationalId: number;
    relationalTypeId: MasterValueModel;
    fileTypeId: MasterValueModel;
    createdDate: string;

    public constructor() {
        this.id = null;
        this.fileName = '';
        this.downloadUrl = '';
        this.pathFirebaseFile = '';
        this.relationalId = null;
        this.relationalTypeId = new MasterValueModel();
        this.fileTypeId = new MasterValueModel();
        this.createdDate = new Date().toISOString();
    }
}
