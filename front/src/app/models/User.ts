import {FrameContent} from './FrameContent';
import {Network} from './Network';
import {Skill} from './Skill';
import {Language} from './Language';
import {defaultsDeep} from 'lodash';

export class User {
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

  constructor(user? : Partial<User>) {
    defaultsDeep(this, user);
  }
}
