import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products: Array<Product>;

    constructor(private productService: ProductService) {
      this.productService = productService;
      this.products = [];
     }

    ngOnInit() {
      //this.productService.getProducts().subscribe(myProds => this.products = myProds);
    }

}
