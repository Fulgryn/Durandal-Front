import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../product';
import { ProductService } from '../product.service';
import { SelectItem } from 'primeng/api';
import { CartService } from '../cart.service';

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

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;


  constructor(private productService: ProductService, private cartService : CartService) {
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

  addToCart(product: Product) {
      this.cartService.addToCart(product, 1);
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


  delProduct(event: Event, product: Product) {
    this.selectedProduct = product;
    this.displayDialog2 = true;
    event.preventDefault();
  }
}
