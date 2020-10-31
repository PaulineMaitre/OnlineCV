import {FrameContent} from './FrameContent';
import {Network} from './Network';
import {Skill} from './Skill';
import {Language} from './Language';
import {Hobby} from './Hobby';
import {defaultsDeep} from 'lodash';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate?: Date;
  phoneNumber: string;
  picture?: string;
  address?: string;
  bio?: string;
  email: string;
  socialLink?: Network[];
  skills: Skill[];
  languages: Language[];
  hobbies: Hobby[]
  frame?: FrameContent[];

  constructor(user? : Partial<User>) {
    defaultsDeep(this, user);
  }
}
