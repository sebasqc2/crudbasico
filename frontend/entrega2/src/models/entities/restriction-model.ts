import { UserOAuthModel } from './user-o-auth-model';
import { MasterValueModel } from './master-value-model';

export class RestrictionModel {
    id: number;
    name: string;
    creatorId: UserOAuthModel;
    restrictionModeId: MasterValueModel;
    restrictionTypeId: MasterValueModel;
    lastUpdateId: UserOAuthModel;
    defaultNumericValue: number;
    defaultBooleanValue: boolean;

    public constructor() {
        this.id = null;
        this.name = '';
        this.creatorId = null;
        this.restrictionModeId = new MasterValueModel();
        this.restrictionTypeId = new MasterValueModel();
        this.lastUpdateId = null;
        this.defaultNumericValue = null;
        this.defaultBooleanValue = null;
    }
}
