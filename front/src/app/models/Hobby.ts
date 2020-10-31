import {defaultsDeep} from 'lodash';

export class Hobby {
    id: number;
    name?: string;
    logo?: string;
    description?: string
    user: number;

    constructor(hobby? : Partial<Hobby>) {
        defaultsDeep(this, hobby);
    }
}
