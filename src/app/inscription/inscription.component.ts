import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



import { UserService } from '../user.service';
import { User } from '../user';
import { Message } from 'primeng/api';


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
      password: ['', Validators.pattern('^(?=.*?[a-z])(?=.*?[0-9]).{8,}$')],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: [''],
      tel: ['', Validators.minLength(10)],
      naissance: [''],

    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const invalid = [];
    this.msgs = [];
    // this.userService.connect(this.model).subscribe();
    if (this.formulaire.valid) {
      console.log('form submitted');
      this.newUser = new User(
        this.formulaire.get('email').value,
        this.formulaire.get('password').value,
        this.formulaire.get('nom').value,
        this.formulaire.get('prenom').value,
        this.formulaire.get('adresse').value,
        this.formulaire.get('tel').value,
        this.formulaire.get('naissance').value
      )
      this.msgs.push({ severity: 'success', summary: 'Inscription Validée !', detail: '' });
    } else {
      Object.keys(this.formulaire.controls).forEach(field => {
        //const abs = this.formulaire.get(field);
        // abs.markAsTouched({ onlySelf: true });

        if (this.formulaire.controls[field].invalid) {
          invalid.push(field);
          this.msgs.push({ severity: 'warn', summary: 'INVALID champs', detail: field + ' est invalide, Essaye encore :) ' })
          console.log(invalid);
        }

      });
      
      this.msgs.push({ severity: 'error', summary: 'Produit invalide', detail: '' });
    }
    console.log(this.formulaire);
  }
}

