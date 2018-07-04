import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Config } from './config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Durandal';

    data = {};
    urlApiDetails = 'visitor/details';

    items: MenuItem[];

    constructor(private app: AppService, private http: HttpClient, private router: Router) {
        this.app.authenticate(undefined, undefined);        
    }

    logout() {
        console.log("logout???");
        this.app.logout(() => {
            console.log("return logout");
        })
    }

    ngOnInit() {
        //on changera ici le menu en fonction du niveau d'authentification
        this.items = [
            {
                label: 'Accueil',
                routerLink: '/'

            },
            {
                label: 'Mon Panier',
                routerLink: '/Cart'
            }
        ];
    }
}
