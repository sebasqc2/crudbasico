import { CompanyModel } from './company-model';
import { SubAreaModel } from './sub-area-model';
import { RestrictionTypesModel } from './restriction-type-model';

export class RestrictionSubAreaModel {
    id: string;
    defaultBooleanValue: boolean;
    defaultNumericValue: number;
    restrictionId: RestrictionTypesModel;
    companyId: CompanyModel;
    subAreaId: SubAreaModel;
    createdDate: Date;
    
    public constructor() {
        this.id = '';
        this.companyId = new CompanyModel();
        this.subAreaId = new SubAreaModel();
        this.createdDate = new Date();
        this.restrictionId = new RestrictionTypesModel();
        this.defaultNumericValue = null;
        this.defaultBooleanValue = null;
    }
}
