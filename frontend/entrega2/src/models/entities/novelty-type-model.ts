import { CompanyModel } from './company-model';
import { MasterValueModel } from './master-value-model';

export class NoveltyTypesModel {
    id: number;
    name: string;
    absence: boolean;
    daysGranted: number;
    percentageAssumesEntity: number ;
    statusId: MasterValueModel;
    payrollAccount: boolean;
    companyId: CompanyModel;
    whoApprovesNoveltysId: MasterValueModel;

    constructor(){
        this.id = null;
        this.name = '';
        this.absence = null;
        this.statusId = new MasterValueModel();
        this.payrollAccount = null;
        this.daysGranted = null;
        this.percentageAssumesEntity = null;
        this.companyId = new CompanyModel();
        this.whoApprovesNoveltysId = new MasterValueModel();
    }
}
