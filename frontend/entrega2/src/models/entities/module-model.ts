import { CompanyModel } from './company-model';
import { UserOAuthModel } from './user-o-auth-model';

export class ModuleModel {
    id: number;
    name: string;
    description: string;
    createdDate: string;
    lastUpdateDate: string;
    path: string;
    title: string;
    icon: string;
    classs: string;
    company_id: CompanyModel;
    badge: string;
    badgeClass: string;


    public constructor() {
        this.id = null
        this.name = ''
        this.description = ''
        this.createdDate = new Date().toISOString();
        this.lastUpdateDate = new Date().toISOString();
        this.path = ''
        this.title = ''
        this.icon = ''
        this.classs = ''
        this.badge = ''
        this.badgeClass = ''
        this.company_id = new CompanyModel();
    }

}
