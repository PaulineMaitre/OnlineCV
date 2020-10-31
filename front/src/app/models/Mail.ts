import {defaultsDeep} from 'lodash';

export class Mail {
    contact: string;
    content: string;

    constructor(mail? : Partial<Mail>) {
        defaultsDeep(this, mail);
    }
}
