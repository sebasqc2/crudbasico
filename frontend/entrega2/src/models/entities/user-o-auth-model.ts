
export class UserOAuthModel {

    id: number;
    username: string;
    password: string;
    accountExpired: boolean;
    accountLocked: boolean;
    credentialsExpired: boolean;
    enabled: boolean;

    constructor() {
        this.id = null;
        this.username = '';
        this.password = '';
        this.accountExpired = false;
        this.accountLocked = false;
        this.credentialsExpired = false;
        this.enabled = true;
    }

}