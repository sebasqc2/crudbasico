import { UserModel } from './user-model';
import { CompanyModel } from './company-model';
import { CostCentreModel } from './cost-centre-model';

export class AreaModel {
    id: string;
    name: string;
    description: string;
    companyId: CompanyModel;
    costCentreId: CostCentreModel;

    public constructor() {
        this.id = '';
        this.name = '';
        this.description = '';
        this.companyId = new CompanyModel();
        this.costCentreId = new CostCentreModel();
    }
}
