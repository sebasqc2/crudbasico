import { NoveltyTypesModel } from './../../entities/novelty-type-model';
export class SearchNoveltyModel {
    professionalName: string;
    professionalDocumentNumber: string;
    noveltyTypeId: NoveltyTypesModel;
    startSearchDate: Date;
    endSearchDate: Date;

    constructor() {
        this.professionalName = '';
        this.professionalDocumentNumber = '';
        this.noveltyTypeId = new NoveltyTypesModel();
        this.startSearchDate = new Date();
        this.endSearchDate = new Date();
    }
}
