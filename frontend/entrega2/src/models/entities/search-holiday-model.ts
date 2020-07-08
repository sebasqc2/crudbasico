export class SearchHolidayModel {
    startDate: Date;
    endDate: Date;

    public constructor() {
        this.startDate = new Date();
        this.endDate = new Date();
    }
}
