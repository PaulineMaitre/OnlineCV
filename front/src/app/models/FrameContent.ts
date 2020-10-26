import {FrameItem} from './FrameItem';
import {defaultsDeep} from 'lodash';

export class FrameContent {
    id: number;
    title: string;
    order: number;
    logo: string;
    frameItem: FrameItem[];
    user:number;

    constructor(frameContent? : Partial<FrameContent>) {
        defaultsDeep(this, frameContent);
    }
}

