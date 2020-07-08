
export class HolidayModel {
    id: string;
    name: string;
    description: string;
    dateOfHoliday: Date;

    public constructor() {
        this.id = '';
        this.name = '';
        this.description = '';
        this.dateOfHoliday = new Date();
    }
}
