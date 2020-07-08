import { ProfessionalModel } from './../../entities/professional-model';
import { CostCentreModel } from './../../entities/cost-centre-model';
import { AreaModel } from './../../entities/area-model';


export class SearchProfessionalModel {
    startSearchDate: Date;
    endSearchDate: Date;
    professionalName: string;
    professionalDocumentNumber: string;  
    especialtyProfessional: string;
    CostCentre: CostCentreModel;
    Area: AreaModel;

    constructor() {
        this.professionalName = '';
        this.professionalDocumentNumber = ''
        this.startSearchDate = new Date();
        this.endSearchDate = new Date();
        this.especialtyProfessional = '';
        this.CostCentre = new CostCentreModel();
        this.Area = new AreaModel();
    }
}