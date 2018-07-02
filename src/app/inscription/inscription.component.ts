import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  pass: string| Int32Array;
  formulaire: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formulaire = fb.group({
      email: ['',  Validators.compose([Validators.minLength(5), Validators.required])],
      password : ['', Validators.pattern('')]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // this.userService.connect(this.model).subscribe();
    this.pass = Md5.hashAsciiStr(this.formulaire.get('password').value);
    alert('mdp: ' + this.pass);
  }
}
