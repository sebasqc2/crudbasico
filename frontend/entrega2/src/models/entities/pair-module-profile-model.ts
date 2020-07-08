import { ModuleModel } from 'models/entities/module-model';
import { ProfileModel } from './profile-model';
export class PairModuleProfileModel {
    id: number;
    profileId: ProfileModel;
    moduleId: ModuleModel;
    createdDate: string;
    index: number;

    public constructor() {
        this.id = null;
        this.profileId = new ProfileModel();
        this.moduleId = new ModuleModel();
        this.createdDate = new Date().toISOString();
        this.index = null;
    }
}
