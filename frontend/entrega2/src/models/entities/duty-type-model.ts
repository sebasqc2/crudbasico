
import { UserModel } from './user-model';
import { AreaModel } from './area-model';
import { CompanyModel } from './company-model';
import { MasterValueModel } from './master-value-model';

export class DutyTypesModel {
    id: String;
    creatorId: UserModel;
    lastUpdateId: UserModel;
    nomenclature: String;
    description: String;
    starTime: Date;
    endTime: Date;
    numberOfHoursId:  number;
    numberOfMinutsId: number;
    workshopId: MasterValueModel;
    assigmentDaysId: number;
    companyId: CompanyModel;

    public constructor() {
        this.id = '';
        this.creatorId = new UserModel();
        this.lastUpdateId = new UserModel();
        this.nomenclature ='';
        this.description = '';
        this.starTime = null;
         this.endTime =  null;
        this.numberOfHoursId = null;
        this.numberOfMinutsId = null;
        this.workshopId = new MasterValueModel();
        this.assigmentDaysId = null;
        this.companyId = new CompanyModel();
    }
}
