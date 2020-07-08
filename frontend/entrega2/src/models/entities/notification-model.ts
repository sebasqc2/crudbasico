

export class NotificationModel {
    id: string;
    userIdRelational: string;
    title: string;
    message: string;
    createdDate: string;
    wasOpen: string;
    path: string;

    public constructor() {
        this.id = '';
        this.userIdRelational = '';
        this.title = '';
        this.message = '';
        this.createdDate = '';
        this.wasOpen = '';
        this.path = '';
    }
}