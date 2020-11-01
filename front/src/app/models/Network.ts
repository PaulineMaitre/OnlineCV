import {defaultsDeep} from 'lodash';

export class Network {
    id: number;
    name: string;
    logo: string;
    link: string;
    user: number;

    constructor(network? : Partial<Network>) {
        defaultsDeep(this, network);
    }
}
