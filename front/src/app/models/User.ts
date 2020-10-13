import {FrameContent} from './FrameContent';

export interface User {
  firstName: string;
  lastName: string;
  birthdate?: string;
  bio?: string;
  address?: string;
  email: string;
  socialLink: string[];
  education: string[];
  experience: string[];
  skills: string[];
  projects: string[];
  hobbies: string[];
}