import {defaultsDeep} from 'lodash';

export class Mail {
    contact: string;
    content: string;
    sendTo: string;

    constructor(mail? : Partial<Mail>) {
        defaultsDeep(this, mail);
    }
}
