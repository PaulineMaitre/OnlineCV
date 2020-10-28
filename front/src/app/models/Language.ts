import {defaultsDeep} from 'lodash';

export class Language {
    id: number;
    name: string;
    logo: string;
    level: number;
    user:number;

    constructor(language? : Partial<Language>) {
        defaultsDeep(this, language);
    }
}
