import { UserModel } from './user-model';
export class PlansModel {
    id: number;
    name: string;
    value: number;
    description: string;
    createdDate: string;
    lastUpdateDate: string;

    public constructor() {
        this.id = null;
        this.name = '';
        this.value = 0;
        this.description = '';
        this.createdDate = new Date().toISOString();
        this.lastUpdateDate = new Date().toISOString();
    }
}
