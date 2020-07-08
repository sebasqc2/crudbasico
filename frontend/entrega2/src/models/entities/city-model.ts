import { DepartmentModel } from './department-model';
export class CityModel {

    id: number;
    name: string;
    departmentId: DepartmentModel;

    constructor() {
        this.id = null;
        this.name = '';
        this.departmentId = new DepartmentModel();
    }
}