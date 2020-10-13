import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';
import {User} from '../models/User';
import {Network} from '../models/Network';
import {Skill} from '../models/Skill';
import {FrameContent} from '../models/FrameContent';
import {FrameItem} from '../models/FrameItem';
import {Language} from '../models/Language';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }
  // TODO : à modifier !
  /*getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`).pipe(timeout(10000));
  }*/
  //
  public getUser(): User {
    // SOCIAL NETWORKS
    const linkedin : Network = {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/paulinemaitre/',
      logo: '../assets/logo_linkedin.png',
    };
    const github : Network = {
      name: 'Github',
      link: 'https://www.github.com/PaulineMaitre',
      logo: '../assets/logo_github.png',
    };
    // SKILLS
    const angularSkill: Skill = {
      name: 'Angular',
      logo: '../assets/logo_angular.png',
      level: 3
    }
    const springSkill: Skill = {
      name: 'Spring',
      logo: '../assets/logo_spring.png',
      level: 2
    }
    // LANGUAGES
    const english: Language = {
      name: 'English',
      logo: '../assets/english_flag.png',
      level: 4
    };
    const spanish: Language = {
      name: 'Spanish',
      logo: '../assets/spanish_flag.png',
      level: 3
    };

    // FRAME
    const frameEpf: FrameItem = {
      title: 'EPF Ecole d\'ingénieurs',
      period: 'Since September 2016',
      location: 'Sceaux (92)',
      logo: '../assets/logo_epf.png',
      content: 'Majeure ingénierie & Numérique'
    };
    const frameComillas: FrameItem = {
      title: 'Universidad Pontificia Comillas',
      period: 'September to December 2019',
      location: 'Madrid - Spain',
      logo: '../assets/logo_comillas.png',
      content: 'Erasmus semester studying IT'
    };
    const educationFrame: FrameContent = {
      title: 'Education',
      order: 1,
      logo: '../assets/diploma.png',
      frameItem: [frameEpf, frameComillas]
    }

    const frameEpfProjets: FrameItem = {
      title: 'Junior Entreprise',
      period: 'Since January 2019',
      location: 'Sceaux (92)',
      logo: '../assets/logo_epf_projets.png',
      content: 'Membre du pôle Système d\'Informations et Chef de projet'
    };
    const frameServier: FrameItem = {
      title: 'Servier',
      period: 'June & July 2018',
      location: 'Suresnes (92)',
      logo: '../assets/logo_servier.png',
      content: 'CSR Reporting'
    };
    const experienceFrame: FrameContent = {
      title: 'Experience',
      order: 2,
      logo: '../assets/handshake.png',
      frameItem: [frameEpfProjets, frameServier]
    }

    const user : User = {
      firstName: 'Pauline',
      lastName: 'Maitre',
      birthdate: '13/03/1998',
      phoneNumber: '+33 6 15 11 44 71',
      bio: 'French engineering student looking for a final year internship',
      address: '20 allée des ifs, 78510 Triel Sur Seine, France',
      email: 'pauline.maitre@epfedu.fr',
      socialLink: [linkedin, github],
      skills: [angularSkill, springSkill],
      languages: [english, spanish],
      frame: [educationFrame, experienceFrame]
    };
    return user;

  }

  addUser(user: User): Observable<User> {
    return this.http.post<any>(`${this.url}/users`, user).pipe(timeout(10000));
  }
  //
  // deleteUser(id: number): Observable<any> {
  //   return this.http.delete(`${this.url}/users/${id}`).pipe(timeout(10000));
  // }

}
