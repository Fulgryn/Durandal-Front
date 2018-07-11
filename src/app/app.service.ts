import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './config';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public access : Access = new Access();

    constructor(private http: HttpClient) {     
    }

    authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
        } : {});

        this.http.get(Config.restApi.concat('/user'), { headers: headers }).subscribe(
            response => {
                console.log(response);
                if (response != null) {
                    if (credentials) {
                        sessionStorage.setItem('auth', btoa(credentials.email + ':' + credentials.password));
                    }
                    this.access.isAuthenticated = true;
                    this.access.email = response['name'];
                    this.access.isAdmin = response['authorities'][0]['authority'] === "ROLE_ADMIN";
                    console.log("loged in ! As : " + this.access);
                } else {
                    this.access.isAuthenticated = false;
                    this.access.isAdmin = false;
                    this.access.email = "";
                }

                return callback && callback();
            },
            error => {
                return callback && callback();
            }
        );
    }

    logout(callback) {
        this.access.isAuthenticated = false;
        this.access.isAdmin = false;
        this.access.email = "";
        sessionStorage.setItem('auth', "");

        return callback && callback();
    }    
}

export class Access {
    isAuthenticated : boolean = false;
    isAdmin : boolean = false;
    email : string = "";

    toString() {
        return "{Access : isAuthenticated="+this.isAuthenticated+" isAdmin="+this.isAdmin+" email="+this.email+"}";
    }
}