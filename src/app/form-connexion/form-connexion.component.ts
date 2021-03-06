import { Component, OnInit, Inject } from '@angular/core';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { PasswordModule } from 'primeng/password';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';



import { User } from '../user';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component'

// PrimeNG bulles loginFail
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-form-connexion',
    templateUrl: './form-connexion.component.html',
    styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {
    model: User;
    pass: string | Int32Array;

    isLogedIn: boolean;
    formulaire: FormGroup;
    msgs: Message[] = [];

    constructor(private fb: FormBuilder, private app: AppService, private router: Router) {
        this.isLogedIn = true; // style: display true html
        this.formulaire = fb.group({
            logEmail: ['', Validators.compose([Validators.minLength(5), Validators.required])],
            logPassword: ['', Validators.pattern('^(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]
        });
        this.msgs = [];
    }

    ngOnInit() {
    }

    onSubmit() {
        // this.userService.connect(this.model).subscribe();
        /*this.pass = Md5.hashAsciiStr(this.formulaire.get('logPassword').value);
        alert('mdp: ' + this.pass);*/
        var email = this.formulaire.get('logEmail').value;
        var password = this.formulaire.get('logPassword').value;
        this.login(email, password);
    }

    login(email: String, password: String) {
        var credentials = { email, password };
        this.app.authenticate(credentials, () => {
            if (this.app.access.isAuthenticated) { 
                this.router.navigateByUrl('/');
                //this.app.getAccess
            } else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: 'Erreur de connexion', detail: 'Vérifiez vos identifiants' });
            }
        });
        return false;
    }


}
