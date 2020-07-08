import { UserModel } from './user-model';
import { DutyTypesModel } from './duty-type-model';
import { SubAreaModel } from './sub-area-model';

export class DutyTypeBySubAreaModel {
    id: number;
    subAreaId: SubAreaModel;
    dutyTypeId: DutyTypesModel;

    public constructor() {
        this.id = null;
        this.subAreaId = new SubAreaModel();
        this.dutyTypeId = new DutyTypesModel();
    }
}
