import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import {User} from '../models/User';
import {Mail} from '../models/Mail';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    mail:Mail;
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

    /** Requests for users with API */

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.url}/users/`).pipe(timeout(10000));
    }
    getUserById(id: number): Observable<any> {
        return this.http.get<User>(`${this.url}/users/${id}`).pipe(tap(_ => timeout(1000)));
    }

    updateUser(user: User): Observable<any> {
        return this.http.put(`${this.url}/users/`, user).pipe(tap(_ => timeout(1000)));
    }

    createUser(user: User): Observable<any> {
        return this.http.post<any>(`${this.url}/users/create`, user).pipe(timeout(1000));
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.url}/users/${id}`).pipe(timeout(10000));
    }
    sendMail(sender: string, senderContent:string,userSendTo:string){
        this.mail={contact:sender,content:senderContent,sendTo:userSendTo};
        return this.http.put(`${this.url}/users/mail`, this.mail).pipe(tap(_ => timeout(1000)));
    }

}
