import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './config';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    authenticated = false;
    email = "";

    constructor(private http: HttpClient) {
    }

    authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
        } : {});

        this.http.get(Config.restApi.concat('/user'), { headers: headers }).subscribe(
        response => {
            if (response != null) {
                this.authenticated = true;
                this.email = response['name'];
                console.log("loged in !");
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        },
        error => {
            return callback && callback();
        }
        );
    }

    logout(callback) {
        /*this.http.post(Config.restApi.concat('/logout'), {}).subscribe(
        () => {
            this.authenticated = false;
            console.log("loged out !");

            return callback && callback();
        }, 
        error =>  {
            return callback && callback();
        });*/
        this.authenticated = false;
        this.email = "";
    }
}
