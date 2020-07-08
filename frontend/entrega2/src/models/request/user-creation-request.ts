import { UserModel } from '../entities/user-model';
import {UserOAuthModel} from '../entities/user-o-auth-model';
import { ProfessionalSonModel } from 'models/entities/son-professional-model';
import { OccupationsModel } from 'models/entities/occupation-model';

export class UserCreationRequest {

    user: UserOAuthModel;
    userInfo: UserModel;
    newSons: Array <ProfessionalSonModel>;
    newSpecialities: Array <OccupationsModel>;

    constructor(){
        this.user = new UserOAuthModel();
        this.userInfo = new UserModel();
        this.newSons = new Array();
        this.newSpecialities  = new Array();
    }

}