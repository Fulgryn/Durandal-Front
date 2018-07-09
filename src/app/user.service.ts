import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  head = new HttpHeaders().append('Content-Type', 'Application/json');


  constructor(private http: HttpClient ) { }


  addUser(user: User): Observable<User> {

    return this.http.post<User>( Config.restApi.concat('/addUser') ,
      JSON.stringify(user), { headers: this.head});

  }

  logUser(user: User): Observable<User> {

    return this.http.post<User>(  Config.restApi.concat('/user'), // Durandal avec majuscule ?
     JSON.stringify(user), { headers: this.head});

  }

}
