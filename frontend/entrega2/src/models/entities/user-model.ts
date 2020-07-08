import { ProfessionalModel } from './professional-model';
import { ProfileModel } from 'models/entities/profile-model';
import { UserOAuthModel } from './user-o-auth-model';
import { SubareaModel } from './subarea';
import { CompanyModel } from 'models/entities/company-model';
import { MasterValueModel } from './master-value-model';
import { PlansModel } from './plans-model';
import { AreaModel } from './area-model';
export class UserModel {
    id: number;
    completeName: string;
    username: string;
    email: string;
    documentNumber: string;
    birthday: string;
    address: string;
    phone: string;
    cellphone: string;
    roleId: MasterValueModel;
    genderId: MasterValueModel;
    companyId: CompanyModel;
    documentTypeId: MasterValueModel;
    userId: UserOAuthModel;
    activatedPlanId: PlansModel;
    activatedProfileId: ProfileModel;
    areaId: AreaModel;
    creatorId: UserOAuthModel;
    createdDate: string;
    lastUpdateDate: string;
    token: string;
    professionalId: ProfessionalModel;


    constructor() {
        this.id = null;
        this.completeName = '';
        this.username = '';
        this.email = '';
        this.documentTypeId = new MasterValueModel();
        this.documentNumber = '';
        this.birthday = '';
        this.address = '';
        this.phone = '';
        this.cellphone = '';
        this.roleId = new MasterValueModel();
        this.genderId = new MasterValueModel();
        this.companyId = new CompanyModel();
        this.userId = new UserOAuthModel();
        this.activatedPlanId = new PlansModel();
        this.activatedProfileId = new ProfileModel();
        this.areaId = new AreaModel();
        this.token = '';
        this.professionalId = new ProfessionalModel();
    }

}
