import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../product';
import { ProductService } from '../product.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  @Input() admin: boolean;
  products: Array<Product>;

  selectedProduct: Product;

  displayDialog: boolean;
  displayDialog2: boolean;
  displayDialog3: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  isOrdered: boolean = true; // EN ATTENDANT LES COMMANDES

  constructor(private productService: ProductService) {
    this.productService = productService;
    this.products = [];
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(myProds => this.products = myProds);

    this.sortOptions = [
      { label: 'Nom', value: 'name' },
      { label: 'Prix: le moins cher', value: 'price' },
      { label: 'Prix: le plus cher', value: '!price' },
      { label: 'Editeur', value: 'editor' }
    ];
  }

  selectProduct(event: Event, product: Product) {
    this.selectedProduct = product;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedProduct = null;
  }

  updateDialog(event: Event, product: Product) {
    this.selectedProduct = product;
    this.displayDialog3 = true;
    event.preventDefault();

  }

  delDialog(event: Event, product: Product) {
    this.selectedProduct = product;
    this.displayDialog2 = true;
    event.preventDefault();
  }

  hide() {
    this.displayDialog2 = true;
    event.preventDefault();
  }

  updateProduct(event: Event, product: Product) {
    this.productService.updateProduct(product);
    this.displayDialog2 = false;
    event.preventDefault();
  }
  delProduct(event: Event, product: Product) {
    this.productService.deleteProduct(product);
    this.displayDialog2 = false;
    event.preventDefault();
  }
  desactivateProduct(event: Event, product: Product) {
    this.productService.desactivateProduct(product);
    this.displayDialog2 = false;
    event.preventDefault();

  }
  activateProduct(event: Event, product: Product) {
    this.productService.desactivateProduct(product);
    this.displayDialog3 = false;
  }
}
