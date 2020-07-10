export class ModalInformationModel{
  isView: boolean;
  isCreate: boolean;
  isUpdate: boolean;
  param: string;

  public constructor(){
    this.isView = false;
    this.isCreate = false;
    this.isUpdate = false;
    this.param = '';
  }
}
