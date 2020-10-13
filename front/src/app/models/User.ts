import {FrameContent} from './FrameContent';
import {Network} from './Network';
import {Skill} from './Skill';

export interface User {
  firstName: string;
  lastName: string;
  birthdate?: string;
  phoneNumber: string;
  bio?: string;
  address?: string;
  email: string;
  socialLink?: Network[];
  skills: Skill[];
  frame?: FrameContent[];
}

// frame = [FrameContent(Experience,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem(),]),
//   FrameContent('Vie asso', [Frameitem(),Frameitem(),Frameitem(),]),
//   FrameContent([Frameitem(),Frameitem(),Frameitem(),])
// ]
//
//
// frPropo = FrameContent(Experience,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem())
// frPropo = FrameContent(Formation,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem())
// frPropo = FrameContent(Projets,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem())
//


// projects?: FrameContent;
// hobbies?: FrameContent;
// frameContent?: FrameContent;

