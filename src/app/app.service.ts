import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './config';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    authenticated = false;

    constructor(private http: HttpClient) {
    }

    authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
        } : {});

        this.http.get(Config.restApi.concat('/user'), { headers: headers }).subscribe(response => {
            console.log(response);
            if (response != null) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }
}
