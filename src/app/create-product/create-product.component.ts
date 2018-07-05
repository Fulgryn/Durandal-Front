import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  formulaire: FormGroup;
  newProduct: Product;
  ref: string;

  constructor(@Inject(FormBuilder) private fb: FormBuilder, private productService: ProductService) {
    this.productService = productService;

    this.formulaire = this.fb.group({
      nom: ['', Validators.required],
      prix: ['', [Validators.required, Validators.pattern("^\\d+\\.\\d{0,2}$")]],
      description: ['', Validators.required],
      type: ['', Validators.required],
      /*annee: ['', Validators.required],*/
      editeur: ['', Validators.required]

    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formulaire.valid) {
      console.log('form submitted');
      this.ref = this.formulaire.get('type').value.substring(0, 3) + Math.floor(Math.random() * (9999 - 1000));
      this.newProduct = new Product(
        //this.ref,
        this.formulaire.get('nom').value,
        0,
        this.formulaire.get('prix').value,
        this.formulaire.get('description').value,
        this.formulaire.get('type').value,
        //this.formulaire.get('annee').value,
        this.formulaire.get('editeur').value,
        '')
      alert(JSON.stringify(this.newProduct));
      this.productService.addProduct(this.newProduct);
      // this.userService.connect(this.model).subscribe();
    } else {
      Object.keys(this.formulaire.controls).forEach(field => {
        const control = this.formulaire.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      alert("Produit invalide");
    }
    //alert(this.formulaire.status);

  }

  isFieldValid(field: string) {
    return !this.formulaire.get(field).valid && this.formulaire.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

}
//[disabled]="!formulaire.valid"