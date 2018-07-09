import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  formulaire: FormGroup;
  newProduct: Product;
<<<<<<< Updated upstream
  //ref : string;
  fileToUpload: File = null;
  msgs: Message[];
  picture: string = null;

  constructor(@Inject(FormBuilder) private fb: FormBuilder, private productService: ProductService) {
    this.productService = productService;
=======
  ref: string;
>>>>>>> Stashed changes


    this.formulaire = this.fb.group({
      nom: ['', Validators.required],
      prix: ['', [Validators.required, Validators.pattern("^\\d+\\.\\d{0,2}$")]],
      description: ['', Validators.required],
      type: ['', Validators.required],
<<<<<<< Updated upstream
      /*annee: ['', Validators.required],*/
=======
      annee: ['', Validators.required],
>>>>>>> Stashed changes
      editeur: ['', Validators.required]

    });
  }

  ngOnInit() {
  }

  onSubmit() {
<<<<<<< Updated upstream
    if (this.formulaire.valid && this.picture != null) {
      console.log('form submitted');
      //this.ref = this.formulaire.get('type').value.substring(0, 3) + Math.floor(Math.random() * (9999 - 1000));
      this.newProduct = new Product(
        //this.ref,
=======
    if (this.formulaire.valid) {
      console.log('form submitted');
      this.ref = this.formulaire.get('type').value.substring(0, 3) + Math.floor(Math.random() * (9999 - 1000));
      this.newProduct = new Product(
        this.ref,
>>>>>>> Stashed changes
        this.formulaire.get('nom').value,
        0,
        this.formulaire.get('prix').value,
        this.formulaire.get('description').value,
        this.formulaire.get('type').value,
<<<<<<< Updated upstream
        //this.formulaire.get('annee').value,
        this.formulaire.get('editeur').value,
        this.picture)
      this.msgs = [];
      this.msgs.push({ severity: 'success', summary: 'Produit ajouté!', detail: '' });
=======
        this.formulaire.get('annee').value,
        this.formulaire.get('editeur').value,
        '')
      alert(JSON.stringify(this.newProduct));
      // this.userService.connect(this.model).subscribe();
>>>>>>> Stashed changes
    } else {
      Object.keys(this.formulaire.controls).forEach(field => {
        const control = this.formulaire.get(field);
        control.markAsTouched({ onlySelf: true });
      });
<<<<<<< Updated upstream
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Produit invalide', detail: '' });
    }
=======
      alert("Produit invalide");
    }
    //alert(this.formulaire.status);

>>>>>>> Stashed changes
  }

  isFieldValid(field: string) {
    return !this.formulaire.get(field).valid && this.formulaire.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
<<<<<<< Updated upstream
  }

  myUploader(files: FileList) {
    let formData = new FormData();
    formData.append('file', files[0]);
    this.picture = "/image/" + files[0].name;
    this.productService.uploadImage(formData);
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Image téléversée', detail: '' });
=======
>>>>>>> Stashed changes
  }


}
//[disabled]="!formulaire.valid"