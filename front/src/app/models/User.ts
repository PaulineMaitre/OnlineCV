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
  bio?: string;
  logo?: string;
  address?: string;
  email: string;
  socialLink?: Network[];
  skills: Skill[];
  languages: Language[]
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

