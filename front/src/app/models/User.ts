import {FrameContent} from './FrameContent';
import {Networks} from './Networks';
import {Skills} from './Skills';

export interface User {
  firstName: string;
  lastName: string;
  birthdate: string;
  phoneNumber: string;
  bio: string;
  address: string;
  email: string;
  socialLink: Networks[];
  education: FrameContent[];
  experience: FrameContent[];
  skills: Skills[];
  projects: FrameContent[];
  hobbies: FrameContent[];
  frameContent: FrameContent[];
}
