import { Component, OnInit, Inject } from '@angular/core';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';

import {PasswordModule} from 'primeng/password';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';



import {User} from '../user';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {
  model: User ;
  pass: string| Int32Array;

  login: boolean;
  formulaire: FormGroup;
  constructor(private fb: FormBuilder) {

    this.login = true; // style: display true html
    this.formulaire = fb.group({
      logEmail: ['',  Validators.compose([Validators.minLength(5), Validators.required])],
      logPassword : ['', Validators.pattern('^(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // this.userService.connect(this.model).subscribe();
    this.pass = Md5.hashAsciiStr(this.formulaire.get('logPassword').value);
    alert('mdp: ' + this.pass);
  }


}
