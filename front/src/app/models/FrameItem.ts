import {defaultsDeep} from 'lodash';

export class FrameItem {
    id: number;
    title: string;
    period: string;
    location?: string;
    order: number;
    logo: string;
    content: string;
    frame:number;

    constructor(frameItem? : Partial<FrameItem>) {
        defaultsDeep(this, frameItem);
    }
}
