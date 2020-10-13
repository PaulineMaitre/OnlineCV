import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';
import {User} from '../models/User';

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
  // public getUser(): User {
  //   const user = {
  //     firstName: 'Pauline',
  //     lastName: 'Maitre',
  //     birthdate: '13/03/1998',
  //     bio: 'French engineering student looking for a final year internship',
  //     address: '20 allée des ifs, 78510 Triel Sur Seine, France',
  //     phoneNumber: '+33 6 15 11 44 71',
  //     email: 'pauline.maitre@epfedu.fr',
  //     socialLink: ['https://www.linkedin.com/in/paulinemaitre/', 'https://www.github.com/PaulineMaitre'],
  //     education: ['EPF Ecole d\'ingénieurs', 'Lycée Notre Dame Les Oiseaux'],
  //     experience: ['EPF Projets Sceaux - Junior Entreprise', 'Servier - Stage engagement citoyen'],
  //     skills: ['HTML', 'CSS'],
  //     projects: ['Foude - développement d\'une application mobile de restauration à domicile', 'JEE'],
  //     hobbies : ['Equitation', 'Natation'],
  //   };
  //   return user;
  // }

  addUser(user: User): Observable<User> {
    return this.http.post<any>(`${this.url}/users`, user).pipe(timeout(10000));
  }
  //
  // deleteUser(id: number): Observable<any> {
  //   return this.http.delete(`${this.url}/users/${id}`).pipe(timeout(10000));
  // }

}
