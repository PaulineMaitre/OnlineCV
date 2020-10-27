import {defaultsDeep} from 'lodash';

export class Skill {
    id: number;
    name: string;
    logo: string;
    level: number;
    user:number;

    constructor(skill? : Partial<Skill>) {
        defaultsDeep(this, skill);
    }
}
