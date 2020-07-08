import { UserOAuthModel } from './user-o-auth-model';
import { CompanyModel } from './company-model';
export class Holidays {
    id: number;
    creatorId: UserOAuthModel;
    lastUpdateId: UserOAuthModel;
    dateOfHoliday: string;
    name: string;
    description: string;
    fromApi: boolean;
    companyId: CompanyModel;
    createdDate: string;
    lastUpdateDate: string;

    constructor() {
        this.id = null;
        this.creatorId = new UserOAuthModel();
        this.lastUpdateId = new UserOAuthModel();
        this.dateOfHoliday = '';
        this.name = '';
        this.description = '';
        this.fromApi = false;
        this.companyId = new CompanyModel();
        this.createdDate = new Date().toISOString();
        this.lastUpdateDate = new Date().toISOString();
    }
}