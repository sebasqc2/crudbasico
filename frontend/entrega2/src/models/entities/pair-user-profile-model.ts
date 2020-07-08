import { UserModel } from 'models/entities/user-model';
import { ProfileModel } from 'models/entities/profile-model';
export class PairUserProfileModel {
    userId: UserModel;
    profileId: ProfileModel;

    public constructor() {
        this.userId = new UserModel();
        this.profileId = new ProfileModel();
    }

}
