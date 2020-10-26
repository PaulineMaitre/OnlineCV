import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
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
  public getUserById(): Observable<any> {
    return this.http.get<User>(`${this.url}/users/1`).pipe(
        tap(_ => console.log('user sent')),
        timeout(1000));
  }
  public putUpdateUser(user :User): Observable<any> {
    return this.http.put(`${this.url}/users/`, user).pipe(
        tap(_ => console.log(`updated hero id=${user.firstName}`),
        timeout(1000)));
  }
    /*getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.url}/users`).pipe(timeout(10000));
    }*/
  //

  addUser(user: User): Observable<User> {
    return this.http.post<any>(`${this.url}/users`, user).pipe(timeout(10000));
  }
  //
  // deleteUser(id: number): Observable<any> {
  //   return this.http.delete(`${this.url}/users/${id}`).pipe(timeout(10000));
  // }

}
