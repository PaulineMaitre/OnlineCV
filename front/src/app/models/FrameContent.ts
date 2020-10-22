import {FrameItem} from './FrameItem';

export interface FrameContent {
    id: number;
    title: string;
    order: number;
    logo: string;
    frameItem: FrameItem[];
    user:number;
}
