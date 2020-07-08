import { UserModel } from './user-model';
import { CompanyModel } from './company-model';
import { AreaModel } from './area-model';
import { MasterValueModel } from './master-value-model';

export class SubAreaModel {
    id: string;
    name: string;
    description: string;
    companyId: CompanyModel;
    creatorId: UserModel;
    lastUpdateId: UserModel;
    areaId: AreaModel;
    createdDate: Date;
    lastUpdateDate: Date;
    color: string;
    stateId: MasterValueModel

    public constructor() {
        this.id = '';
        this.name = '';
        this.description = '';
        this.companyId = new CompanyModel();
        this.creatorId = new UserModel();
        this.lastUpdateId = new UserModel();
        this.areaId = new AreaModel();
        this.createdDate = new Date();
        this.lastUpdateDate = new Date();
        this.color = '';
        this.stateId = new MasterValueModel();
    }
}
