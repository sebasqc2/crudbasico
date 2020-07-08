import { UserModel } from './user-model';
import { MasterValueModel } from './master-value-model';
import { CompanyModel } from './company-model';
import { NoveltyTypesModel } from './novelty-type-model';

export class NoveltyModel {
    id: number;
    createdDate: Date;
    lastUpdateDate: Date;
    professionalId: UserModel;
    noveltyTypeId: NoveltyTypesModel;
    description: string;
    startDate: Date;
    endDate: Date;
    stateDescription: string;
    stateId: MasterValueModel;
    companyId: CompanyModel;

    constructor(){
        this.id = null;
        this.createdDate = new Date();
        this.lastUpdateDate = new Date();
        this.professionalId = new UserModel();
        this.noveltyTypeId = new NoveltyTypesModel();
        this.description = '';
        this.startDate = new Date();
        this.endDate = new Date();
        this.stateDescription = '';
        this.stateId = new MasterValueModel();
        this.companyId = new CompanyModel();
    }
}
