import { MenuModel } from 'models/entities/menu-model';
import { ModuleModel } from 'models/entities/module-model';
export class PairModuleMenuModel {
    id: number;
    moduleId: ModuleModel;
    menuId: MenuModel;
    createdDate: string;
    index: number

    public constructor() {
        this.id = null;
        this.moduleId = new ModuleModel;
        this.menuId = new MenuModel;
        this.createdDate = new Date().toISOString();
        this.index = null;
    }
}
