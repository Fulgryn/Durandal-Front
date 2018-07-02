import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Durandal';

  items: MenuItem[];

    ngOnInit() {
        //on changera ici le menu en fonction du niveau d'authentification
        this.items = [
            {
                label: 'Accueil',
                routerLink:'/'
                
            },
            {
                label: 'Mon Panier',
                routerLink:'/Cart'
            }
        ];
    }
}
