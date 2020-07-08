export class RelationalFileModel {
    relationalId: any;
    relationalType: any;
    relationalObjetive: any;
    relationalFileType: any;
    relationalRestrictions: any;
    showCreateButton: any;
    showTitle: any;
    maxNumberOfFiles: any;

    public constructor() {
        this.relationalId = 0;
        this.relationalType = '';
        this.relationalObjetive = '';
        this.relationalFileType = '';
        this.relationalRestrictions = new Array();
        this.showCreateButton = true;
        this.showTitle = true;
        this.maxNumberOfFiles = 10;
    }
}
