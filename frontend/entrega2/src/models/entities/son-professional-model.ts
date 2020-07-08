
import { MasterValueModel } from './master-value-model';
import { ProfessionalModel } from './professional-model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [FormsModule,ReactiveFormsModule]
})

export class ProfessionalSonModel {

    id: number;
    documentTypeId: MasterValueModel; 
    documentNumber: String;
    completeName: String;
    birthday: Date;
    genderId: MasterValueModel;
    professionalId: ProfessionalModel;

    constructor(){
        this.id = null;
        this.documentTypeId = new MasterValueModel();
        this.documentNumber = '';
        this.completeName = '';
        this.birthday = new Date();
        this.genderId = new MasterValueModel();
        this.professionalId = new ProfessionalModel();
    }
}