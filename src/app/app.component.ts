import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Durandal';
    admin = 'admin';
    items: MenuItem[];

    ngOnInit() {
        // on changera ici le menu en fonction du niveau d'authentification
        console.log(new User().role);
        if ( new User().role === this.admin) {
            this.items = [
                {
                    label: 'Accueil',
                    routerLink: '/'

                },
                {
                    label: 'Mon Panier',
                    routerLink: '/Cart'
                },
                {
                    label: 'Gestion des produits',
                    routerLink: '/GestionProduit'
                },
                {
                    label: 'Gestion des Commandes',
                    routerLink: '/GestionCommandes'
                }
            ];
        } else {
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
}
