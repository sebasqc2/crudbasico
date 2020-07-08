import { UserOAuthModel } from './user-o-auth-model';
import { RestrictionModel } from './restriction-model';
import { CompanyModel } from './company-model';

export class RestrictionTypesModel {
    id: number;
    name: string;
    creatorId: UserOAuthModel;
    lastUpdateId: UserOAuthModel;
    defaultBooleanValue: boolean;
    defaultNumericValue: number;
    companyId: CompanyModel;
    restrictionId: RestrictionModel;
    
    

    public constructor() {
        this.id = null;
        this.name = '';
        this.creatorId = new UserOAuthModel();
        this.lastUpdateId = new UserOAuthModel();
        this.creatorId = new UserOAuthModel();
        this.defaultNumericValue = null;
        this.defaultBooleanValue = null;
        this.companyId = new CompanyModel();
        this.restrictionId = new RestrictionModel();
       
    }
}
