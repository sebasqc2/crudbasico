import { UserOAuthModel } from './user-o-auth-model';

export class MenuModel {
    id: number;
    name: string;
    path: string;
    title: string;
    icon: string;
    classs: string;
    badge: string;
    badgeClass: string;
    createdDate: string;


    public constructor() {
        this.id = null;
        this.name = '';
        this.path = '';
        this.title = '';
        this.icon = '';
        this.classs = '';
        this.badge = '';
        this.badgeClass = '';
        this.createdDate = new Date().toISOString();
    }
}
