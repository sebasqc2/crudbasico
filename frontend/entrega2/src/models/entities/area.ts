import { UserOAuthModel } from './user-o-auth-model';
import { CostCentreModel } from './cost-centre-model';
import { CompanyModel } from 'models/entities/company-model';
export class AreaModel {
    id: number;
    creatorId: UserOAuthModel;
    lastUpdateId: UserOAuthModel;
    name: string;
    description: string;
    companyId: CompanyModel;
    costCentreId: CostCentreModel;
    createdDate: string;
    lastUpdateDate: string;

    constructor() {
        this.id = -1;
        this.creatorId = new UserOAuthModel();
        this.lastUpdateId = new UserOAuthModel();
        this.name = name;
        this.description = '';
        this.companyId = new CompanyModel();
        this.costCentreId = new CostCentreModel();
        this.createdDate = new Date().toISOString();;
        this.lastUpdateDate = new Date().toISOString();;
    }
}