import { UserOAuthModel } from './user-o-auth-model';
import { MasterValueModel } from './master-value-model';
export class CompanyModel {
    id: number;
    uniqueId: string;
    uniqueType: MasterValueModel;
    annualHours: number;
    createdDate: string;
    endTimeNightTime: string;
    hoursByDay: number;
    hoursByMonth: number;
    hoursByWeek: number;
    lastUpdateDate: string;
    name: string;
    overtimeAnnualHours: number;
    startTimeNightTime: string;
    whichAreHolidays: MasterValueModel;

    public constructor() {
        this.id = null;
        this.uniqueId = '';
        this.uniqueType = new MasterValueModel()
        this.annualHours = 0;
        this.createdDate = new Date().toISOString();
        this.endTimeNightTime = '00:00:00';
        this.hoursByDay = 0;
        this.hoursByMonth = 0;
        this.hoursByWeek = 0;
        this.lastUpdateDate = new Date().toISOString();
        this.name = '';
        this.overtimeAnnualHours = 0;
        this.startTimeNightTime = '00:00:00';
        this.whichAreHolidays = new MasterValueModel();
    }
}