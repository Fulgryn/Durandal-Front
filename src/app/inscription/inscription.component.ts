import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Message } from 'primeng/api';
import { PasswordValidation } from '../password-validation';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  pass: string | Int32Array;
  formulaire: FormGroup;
  msgs: Message[];
  newUser: User;


  constructor(private fb: FormBuilder, private userService: UserService) {

    this.formulaire = fb.group({
      email: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      password2: ['', [Validators.required, Validators.pattern('^(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: [''],
      tel: ['', Validators.minLength(10)],
      naissance: [''],

    },
      {
        validator: PasswordValidation.MatchPassword
      }
    );
  }

  ngOnInit() {
  }

  onSubmit() {
    const invalid = [];

    // this.userService.connect(this.model).subscribe();
    if (this.formulaire.valid) {
      //console.log('form submitted');
      this.newUser = new User(
        this.formulaire.get('email').value,
        this.formulaire.get('password').value,
        this.formulaire.get('nom').value,
        this.formulaire.get('prenom').value,
        this.formulaire.get('adresse').value,
        this.formulaire.get('tel').value,
        this.formulaire.get('naissance').value
      );
      let erreurs;
      this.userService.addUser(this.newUser).subscribe(result => console.log(result), error => {
        erreurs = error.status;
        console.log(error.status);
        if (erreurs == 500) {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: ' Erreur:', detail: "Cette adresse email est déja utilisé, changez d'email lol :/ " });
        }
      }
      );
      if (erreurs == undefined) {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Inscription Validée !', detail: ':)' });
      }
    } else {
      Object.keys(this.formulaire.controls).forEach(field => {
        //const abs = this.formulaire.get(field);
        // abs.markAsTouched({ onlySelf: true });

        if (this.formulaire.controls[field].invalid) {
          invalid.push(field);
          this.msgs = [];
          this.msgs.push({ severity: 'warn', summary: 'INVALID champs', detail: 'le champs: "' + field + '" est invalide, Essaye encore :) ' })
          console.log(invalid);
        }

      });

    }
    console.log(this.formulaire);
  }
}

