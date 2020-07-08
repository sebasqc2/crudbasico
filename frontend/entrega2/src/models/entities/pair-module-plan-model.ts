import { ModuleModel } from 'models/entities/module-model';
import { PlansModel } from './plans-model';
export class PairModulePlanModel {
    id: number;
    planId: PlansModel;
    moduleId: ModuleModel;
    createdDate: string;

    public constructor() {
        this.id = null;
        this.planId = new PlansModel;
        this.moduleId = new ModuleModel;
        this.createdDate = new Date().toISOString();
    }
}
