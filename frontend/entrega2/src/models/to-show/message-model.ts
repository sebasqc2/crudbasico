export class MessageModel {
    id: string;
    text: string;
    attach: string;
    img: string;
    created: string;
    senderId: string;

    public constructor() {
        this.id = '';
        this.text = '';
        this.attach = '';
        this.img = '';
        this.created = '';
        this.senderId = '';
    }
}
