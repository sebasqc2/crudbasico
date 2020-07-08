import { Injectable } from '@angular/core';
import { CompanyModel } from 'models/entities/company-model';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public shareModel: any = null;
  public shareVariable: any = null;


  constructor() { }

  setShareModel(newModelToShare) {
    this.shareModel = newModelToShare;
  }

  getModel() {
    return this.shareModel;
  }

  cleanSharedModel() {
    this.shareModel = null;
  }

  setShareVariable(newVariableToShare){
    this.shareVariable = newVariableToShare;
  }

  getShareVariable(){
    return this.shareVariable;
  }

  cleanSharedVariable(){
    this.shareVariable = null;
  }

}
