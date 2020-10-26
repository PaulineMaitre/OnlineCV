import {defaultsDeep} from 'lodash';

export class Network {
    id: number;
    name: string;
    link: string;
    logo: string;
    user:number;

    constructor(network? : Partial<Network>) {
        defaultsDeep(this, network);
    }
}
