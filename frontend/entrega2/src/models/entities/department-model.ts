import { CountryModel } from './country-model';
export class DepartmentModel {

    id: number;
    name: string;
    indicative: string;
    countryId: CountryModel;

    constructor() {
        this.id = null;
        this.name = '';
        this.indicative = '';
        this.countryId = new CountryModel();
    }
}