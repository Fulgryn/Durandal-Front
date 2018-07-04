import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  formulaire: FormGroup;
  newProduct: Product;
  ref: string;

  constructor(@Inject(FormBuilder) private fb: FormBuilder) {

    this.formulaire = this.fb.group({
      nom: ['',  Validators.required],
      prix : ['', Validators.required],
      description : ['', Validators.required],
      type : ['', Validators.required],
      annee : ['', Validators.required],
      editeur: ['', Validators.required]

    });
  }

  ngOnInit() {
  }

  onSubmit() {
    alert(this.formulaire.status);

    this.ref = this.formulaire.get('type').value.substring(0,3) + Math.floor(Math.random() * (9999 - 1000));
    this.newProduct = new Product(this.ref,
                                  this.formulaire.get('nom').value,
                                   0,
                                   this.formulaire.get('prix').value,
                                   this.formulaire.get('description').value,
                                   this.formulaire.get('type').value,
                                   this.formulaire.get('annee').value,
                                   this.formulaire.get('editeur').value,
                                  '')
    // this.userService.connect(this.model).subscribe();
    alert(JSON.stringify(this.newProduct));
  }

}
