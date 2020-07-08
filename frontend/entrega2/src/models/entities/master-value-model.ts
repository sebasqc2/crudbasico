export class MasterValueModel {
    id: number;
    name: string;
    objetive: string;
    description: string;
    createdDate: string;

    public constructor() {
        this.id = null;
        this.name = '';
        this.description = '';
        this.objetive = '';
        this.createdDate = new Date().toISOString();
    }
}
