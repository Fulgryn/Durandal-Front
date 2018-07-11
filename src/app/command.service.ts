import { Injectable } from '@angular/core';
import { Product } from './product';
import { Config } from './config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Command } from './command';


@Injectable({
    providedIn: 'root'
})
export class CommandService {
    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    getCommands() {
        return this.http.get(Config.restApi.concat('/commands'));
    }

    addCommand(userEmail: string, products: Map<number, number>) {
        let command = {
            userEmail: userEmail, 
            products: products
        }
        console.log("sent command : " + JSON.stringify(command));
        return this.http.post(Config.restApi + '/addCommand', command, this.httpOptions);
    }
}
