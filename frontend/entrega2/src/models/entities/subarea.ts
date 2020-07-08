import { UserOAuthModel } from './user-o-auth-model';
import { AreaModel } from './area';
import { MasterValueModel } from './master-value-model';
import { CompanyModel } from './company-model';

export class SubareaModel {
    id: number;
    name: string;
    color: string;
    description: string;
    companyId: CompanyModel;
    stateId: MasterValueModel;
    areaId: AreaModel;

    constructor(){
        this.id = null;
        this.name = '';
        this.color = '';
        this.description = '';
        this.companyId = new CompanyModel();
        this.stateId = new MasterValueModel();
        this.areaId = new AreaModel();
    }
}