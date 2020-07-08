import { UserModel } from './user-model';
import { CompanyModel } from './company-model';
import { MasterValueModel} from './master-value-model';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule,ReactiveFormsModule]
})

export class OccupationsModel {
    id: string;
    name: string;
    companyId: CompanyModel;
    description: string;

    public constructor() {
        this.id = '';
        this.name = '';
        this.description = '';
        this.companyId = new CompanyModel();

    }
}