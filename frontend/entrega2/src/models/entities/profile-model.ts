import { UserOAuthModel } from './user-o-auth-model';
import { CompanyModel } from './company-model';

export class ProfileModel {
    id: number;
    name: string;
    description: string;
    createdDate: any;
    lasUpdateDate: any;
    companyId: CompanyModel;

    public constructor() {
        this.id = null;
        this.name = '';
        this.description = '';
        this.createdDate = new Date();
        this.lasUpdateDate = new Date();
        this.companyId = new CompanyModel();
    }
}
