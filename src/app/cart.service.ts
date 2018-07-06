import { Injectable } from '@angular/core';
import { Product } from './product';
import { forEach } from '@angular/router/src/utils/collection';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    getCartString() {
        var stringCart: string = sessionStorage.getItem('cart');
        if (stringCart === null) {
            stringCart = "{}";
        }
        return stringCart
    }

    setCartString(cart: Cart) {
        console.log("set " + cart.toString());
        sessionStorage.setItem('cart', cart.toString());
    }

    addToCart(product: Product, qty: number) {
        var cart: Cart = new Cart(this.getCartString());
        cart.addProduct(product, qty);
        console.log(cart.toString());
        this.setCartString(cart);
    }

    remove(product: Product, qty: number) {
        var cart: Cart = new Cart(this.getCartString());
        cart.remove(product, qty);
        this.setCartString(cart);
    }

    removeAll(product: Product) {
        var cart: Cart = new Cart(this.getCartString());
        cart.removeAll(product);
        this.setCartString(cart);
    }


    getProductsInCart(): Product[] {
        var cart: Cart = new Cart(this.getCartString());
        var products : Product[] = [];
        for (var item in cart.getItems()) {
            console.log(item);
            console.log(item + " : " + cart.getQuantity(item));
            this.productService.getProductByID(Number(item)).subscribe(p => { products.push(p); });            
        }
        return products;
    }

    constructor(private productService : ProductService) { }
}

class Cart {
    map;

    constructor(stringJSON: string) {
        if (stringJSON == undefined || stringJSON === "[]" || stringJSON === "") {
            this.map = [];
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
        this.map[p.id] = 0;
    }

    remove(p: Product, qty: number) {
        if (this.map[p.id] != undefined && this.map[p.id] > qty) {
            this.map[p.id] -= qty;
        } else {
            this.map[p.id] = 0;
        }
    }

    getItems() {
        return this.map;
    }

    getQuantity(item) {
        return this.map[item];
    }

    toString() {
        return JSON.stringify(this.map);
    }


}
