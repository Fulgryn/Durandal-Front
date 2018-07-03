import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { ProductService } from '../product.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;

  selectedProduct: Product;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  

    constructor(private productService: ProductService) {
      this.productService = productService;
      this.products = [];
     }

    ngOnInit() {
      this.productService.getProducts().subscribe(myProds => this.products = myProds);

      this.sortOptions = [
        {label: 'Nom', value: 'name'},
        {label: 'Prix: le moins cher', value: 'price'},
        {label: 'Prix: le plus cher', value: '!price'},
        {label: 'Editeur', value: 'editor'}
    ];
    }

    selectProduct(event: Event, product: Product) {
      this.selectedProduct = product;
      this.displayDialog = true;
      event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

onDialogHide() {
    this.selectedProduct = null;
}
}
