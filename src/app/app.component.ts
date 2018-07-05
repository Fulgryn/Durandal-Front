import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Config } from './config';
import { RouterLink } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private app: AppService, private http: HttpClient, private router: Router) {
        this.app.authenticate(
            undefined, 
            () => {
                this.router.navigateByUrl('/');         
            }
        );
    }

    public isAuthenticated() {
        return this.app.access.isAuthenticated;
    }

    public isAdmin() {
        return this.app.access.isAdmin;
    }

    public getUsername() {
        return this.app.access.email;
    }

    logout() {
        this.app.logout(() => {});
    }

    ngOnInit() {               
    }
}
