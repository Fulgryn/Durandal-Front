import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { AppService } from './app.service';
import { CommandService } from './command.service';
import { Command } from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private productService: ProductService, private appService: AppService, private commandService: CommandService) { }

    getCartString() {
        var stringCart: string = sessionStorage.getItem('cart');
        if (stringCart === null) {
            stringCart = "{}";
        }
        return stringCart
    }

    setCartString(cart: Cart) {
        sessionStorage.setItem('cart', cart.toString());
    }

    addToCart(product: Product, qty: number) {
        var cart: Cart = new Cart(this.getCartString());
        cart.addProduct(product, qty);
        this.setCartString(cart);
    }

    remove(product: Product, qty: number) {
        var cart: Cart = new Cart(this.getCartString());
        var needsRefresh = cart.remove(product, qty);
        this.setCartString(cart);
        return needsRefresh;
    }

    removeAll(product: Product) {
        var cart: Cart = new Cart(this.getCartString());
        cart.removeAll(product);
        this.setCartString(cart);
    }

    resetcart() {
        sessionStorage.setItem('cart', "{}");
    }


    getProductsInCart(): Product[] {
        var cart: Cart = new Cart(this.getCartString());
        var products: Product[] = [];
        for (var item in cart.getItems()) {
            this.productService.getProductByID(Number(item)).subscribe(p => { products.push(p); });
        }
        return products;
    }

    getProductQuantity(product: Product) {
        var cart: Cart = new Cart(this.getCartString());
        return cart.getQuantity(product);
    }

    validateCommand() {
        var cart: Cart = new Cart(this.getCartString());
        return this.commandService.addCommand(this.appService.access.email, cart.map);
    }
}

class Cart {
    map: Map<number, number>;

    constructor(stringJSON: string) {
        if (stringJSON == undefined || stringJSON === "[]" || stringJSON === "") {
            this.map = new Map<number, number>();
        } else {
            this.map = JSON.parse(stringJSON);
        }
    }

    addProduct(p: Product, qty: number) {
        if (this.map[p.id] != undefined || this.map[p.id] != null) {
            this.map[p.id] += qty;
        } else {
            this.map[p.id] = qty;
        }
    }

    removeAll(p: Product) {
        delete this.map[p.id];
        return true;
    }

    remove(p: Product, qty: number) {
        if (this.map[p.id] != undefined && this.map[p.id] > qty) {
            this.map[p.id] -= qty;
            return false;
        } else {
            this.removeAll(p);
            return true;
        }
    }

    getItems() {
        return this.map;
    }

    getQuantity(item) {
        return this.map[item.id];
    }

    toString() {
        return JSON.stringify(this.map);
    }


}
