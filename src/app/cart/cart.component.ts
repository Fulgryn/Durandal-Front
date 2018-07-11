import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { Config } from '../config';
import { AppService } from '../app.service';
import { RouterLink, Router } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    productsInCart: Product[];

    displayDialog = false;
    
    msgs: Message[];

    constructor(private cartService: CartService, private appService: AppService, private router: Router) {

    }

    ngOnInit() {
        this.productsInCart = this.cartService.getProductsInCart();
    }

    picture(pictPath) {
        return Config.restApi + pictPath;
    }

    addToCart(product: Product, qty: number) {
        this.cartService.addToCart(product, qty);
    }

    remove(product: Product, qty: number) {
        if (this.cartService.remove(product, qty)) {
            this.productsInCart = this.cartService.getProductsInCart();
        }
    }

    removeAll(product: Product) {
        this.cartService.removeAll(product);
        this.productsInCart = this.cartService.getProductsInCart();
    }

    getQuantity(product: Product) {
        return this.cartService.getProductQuantity(product);
    }

    getTotalByProduct(product: Product) {
        let total = this.cartService.getProductQuantity(product) * product.price;
        return total.toFixed(2);
    }

    getTotal() {
        let total = 0.00;
        this.productsInCart.forEach((product) => { total += this.cartService.getProductQuantity(product) * product.price })
        return total.toFixed(2);
    }


    onSubmit() {
        if (this.appService.access.isAuthenticated) {
            if (this.productsInCart.length > 0) {
                this.displayDialog = true;
            }            
        } else {
            this.router.navigate(['/Connexion']);
        }
    }

    onDialogHide() {
        this.displayDialog = false;
    }

    onCommandValidation() {
        this.displayDialog = false;
        this.cartService.validateCommand().subscribe(response => console.log(response));
        this.productsInCart = [];
        this.cartService.resetcart();
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Commande validée !', detail: '' });
    }

}
