import {FrameContent} from './FrameContent';
import {Network} from './Network';
import {Skill} from './Skill';
import {Language} from './Language';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate?: string;
  phoneNumber: string;
  logo?: string;
  address?: string;
  bio?: string;
  email: string;
  socialLink?: Network[];
  skills: Skill[];
  languages: Language[];
  frame?: FrameContent[];
}
