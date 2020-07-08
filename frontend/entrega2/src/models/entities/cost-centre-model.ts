import { UserOAuthModel } from './user-o-auth-model';
import { CompanyModel } from './company-model';

export class CostCentreModel {
    id: number;
    name: string;
    description: string;
    companyId: CompanyModel;
    creatorId: UserOAuthModel;
    lastUpdateId: UserOAuthModel

    public constructor() {
        this.id = null;
        this.name = '';
        this.description = '';
        this.companyId = new CompanyModel();
        this.creatorId = new UserOAuthModel();
        this.lastUpdateId = new UserOAuthModel();
    }
}
