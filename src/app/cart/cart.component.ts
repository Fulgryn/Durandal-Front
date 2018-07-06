import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    productsInCart: Product[];

    constructor(private cartService : CartService) { 

    }

    ngOnInit() {
        this.productsInCart = this.cartService.getProductsInCart();
        console.log(this.productsInCart);
    }

}
