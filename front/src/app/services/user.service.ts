import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
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
    options: {
        headers?: HttpHeaders | {[header: string]: string | string[]},
        observe?: 'body',
        params?: HttpParams|{[param: string]: string | string[]},
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }

    constructor(private http: HttpClient) {
        this.url = environment.url;
    }

    // TODO : à modifier !
    /** Requests for user */
    getUserById(id: number): Observable<any> {
        return this.http.get<User>(`${this.url}/users/${id}`).pipe(tap(_ => console.log('user sent to front')), timeout(1000));
    }

    updateUser(user: User): Observable<any> {
        return this.http.put(`${this.url}/users/`, user).pipe(tap(_ =>
            console.log(`Mais pas ici ! :( updated hero id=${user.firstName}`),
            timeout(1000)));
    }

    createUser(user: User): Observable<any> {
        return this.http.post(`${this.url}/users/create`, user).pipe(tap(_ => timeout(1000)));
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.url}/users/${id}`).pipe(timeout(10000));
    }

    /** Requests for user */
    getSkillById(id: number): Observable<any> {
        return this.http.get<Skill>(`${this.url}/skill/${id}`).pipe(tap(_ => timeout(1000)));
    }

    updateSkill(skill: Skill): Observable<any> {
        return this.http.put(`${this.url}/skill/`, skill).pipe(tap(_ => timeout(1000)));
    }

    createSkill(skill: Skill): Observable<any> {
        return this.http.post(`${this.url}/skill/create`, skill, this.options).pipe(tap(_ => timeout(1000)));
    }

    deleteSkill(id: number): Observable<any> {
        return this.http.delete(`${this.url}/skill/${id}`).pipe(timeout(10000));
    }

    /** Requests for social */
    getNetworkById(id: number): Observable<any> {
        return this.http.get<Network>(`${this.url}/social/${id}`).pipe(tap(_ => timeout(1000)));
    }

    updateNetwork(network: Network): Observable<any> {
        return this.http.put(`${this.url}/social/`, network).pipe(tap(_ => timeout(1000)));
    }

    createNetwork(network: Network): Observable<any> {
        return this.http.post(`${this.url}/social/create`, network).pipe(tap(_ => timeout(1000)));
    }

    deleteNetwork(id: number): Observable<any> {
        return this.http.delete(`${this.url}/social/${id}`).pipe(timeout(10000));
    }

    /** Requests for language */
    getLanguageById(id: number): Observable<any> {
        return this.http.get<Language>(`${this.url}/language/${id}`).pipe(tap(_ => timeout(1000)));
    }

    updateLanguage(language: Language): Observable<any> {
        return this.http.put(`${this.url}/language/`, language).pipe(tap(_ => timeout(1000)));
    }

    createLanguage(language: Language): Observable<any> {
        return this.http.post(`${this.url}/language/create`, language).pipe(tap(_ => timeout(1000)));
    }

    deleteLanguage(id: number): Observable<any> {
        return this.http.delete(`${this.url}/language/${id}`).pipe(timeout(10000));
    }

    /** Requests for frame */
    getFrameById(id: number): Observable<any> {
        return this.http.get<FrameContent>(`${this.url}/frame/${id}`).pipe(tap(_ => timeout(1000)));
    }

    updateFrame(frame: FrameContent): Observable<any> {
        return this.http.put(`${this.url}/frame/`, frame).pipe(tap(_ => timeout(1000)));
    }

    createFrame(frame: FrameContent): Observable<any> {
        return this.http.post(`${this.url}/frame/create`, frame).pipe(tap(_ => timeout(1000)));
    }

    deleteFrame(id: number): Observable<any> {
        return this.http.delete(`${this.url}/frame/${id}`).pipe(timeout(10000));
    }

    /** Requests for item */
    getItemById(id: number): Observable<any> {
        return this.http.get<FrameItem>(`${this.url}/item/${id}`).pipe(tap(_ => timeout(1000)));
    }

    updateItem(item: FrameItem): Observable<any> {
        return this.http.put(`${this.url}/item/`, item).pipe(tap(_ => timeout(1000)));
    }

    createItemContent(item: FrameItem): Observable<any> {
        return this.http.post(`${this.url}/item/create`, item).pipe(tap(_ => timeout(1000)));
    }

    deleteItem(id: number): Observable<any> {
        return this.http.delete(`${this.url}/item/${id}`).pipe(timeout(10000));
    }

    /*addUser(user: User): Observable<User> {
      return this.http.post<any>(`${this.url}/users`, user).pipe(timeout(10000));
    }*/
    /*getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.url}/users`).pipe(timeout(10000));
    }*/

    //
    public getUserTest(): User {
        // SOCIAL NETWORKS
        const linkedin: Network = {
            id: 1,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/paulinemaitre/',
            logo: '../assets/logo_linkedin.png',
            user:1,
        };
        const github: Network = {
            id: 2,
            name: 'Github',
            link: 'https://www.github.com/PaulineMaitre',
            logo: '../assets/logo_github.png',
            user:1,
        };
        // SKILLS
        const angularSkill: Skill = {
            id: 1,
            name: 'Angular',
            logo: '../assets/logo_angular.png',
            level: 3,
            user:1,
        }
        const springSkill: Skill = {
            id: 2,
            name: 'Spring',
            logo: '../assets/logo_spring.png',
            level: 2,
            user:1,
        }
        // LANGUAGES
        const english: Language = {
            name: 'English',
            id: 1,
            logo: '../assets/english_flag.png',
            level: 4,
            user:1,
        };
        const spanish: Language = {
            id: 2,
            name: 'Spanish',
            logo: '../assets/spanish_flag.png',
            level: 3,
            user:1,
        };

        // FRAME
        const frameEpf: FrameItem = {
            id: 2,
            title: 'EPF Ecole d\'ingénieurs',
            period: 'Since September 2016',
            order: 1,
            location: 'Sceaux (92)',
            logo: '../assets/logo_epf.png',
            content: 'Majeure ingénierie & Numérique',
            frame: null,
        };
        const frameComillas: FrameItem = {
            id: 1,
            title: 'Universidad Pontificia Comillas',
            period: 'September to December 2019',
            order: 2,
            location: 'Madrid - Spain',
            logo: '../assets/logo_comillas.png',
            content: 'Erasmus semester studying IT',
            frame:null
        };
        const educationFrame: FrameContent = {
            id: 2,
            title: 'Education',
            order: 1,
            logo: '../assets/diploma.png',
            frameItem: [frameEpf, frameComillas],
            user:1,
        }

        const frameEpfProjets: FrameItem = {
            id: 1,
            title: 'Junior Entreprise',
            period: 'Since January 2019',
            location: 'Sceaux (92)',
            order: 1,
            logo: '../assets/logo_epf_projets.png',
            content: 'Membre du pôle Système d\'Informations et Chef de projet',
            frame:null,
        };
        const frameServier: FrameItem = {
            id: 1,
            title: 'Servier',
            period: 'June & July 2018',
            location: 'Suresnes (92)',
            order: 2,
            logo: '../assets/logo_servier.png',
            content: 'CSR Reporting',
            frame: null,
        };
        const experienceFrame: FrameContent = {
            id: 1,
            title: 'Experience',
            order: 2,
            logo: '../assets/handshake.png',
            frameItem: [frameEpfProjets, frameServier],
            user:1,
        }

        const user: User = {
            id: 1,
            firstName: 'Pauline',
            lastName: 'Maitre',
            birthDate: '13/03/1998',
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


}
