import { Injectable } from '@angular/core';
import { Product } from './product';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    getCartString() {
        var stringCart : string = sessionStorage.getItem('cart');
        if (stringCart === null) {
            stringCart = "{}";
        }
        console.log(stringCart);
        return stringCart
    }

    setCartString(cart : Cart) {
        console.log("set " + cart.toString());
        sessionStorage.setItem('cart', cart.toString());
    }

    addToCart(product : Product, qty : number) {
        var cart : Cart = new Cart(this.getCartString());
        cart.addProduct(product, qty);
        console.log(cart.toString());
        this.setCartString(cart);
    }

    remove(product : Product, qty : number) {
        var cart : Cart = new Cart(this.getCartString());
        cart.remove(product, qty);
        this.setCartString(cart);
    }

    removeAll(product : Product) {
        var cart : Cart = new Cart(this.getCartString());
        cart.removeAll(product);
        this.setCartString(cart);
    }

    constructor() { }
}

class Cart {
    map;

    constructor(stringJSON : string) {
        if (stringJSON == undefined || stringJSON === "[]" || stringJSON === "") {
            this.map = [];
        } else {
            this.map = JSON.parse(stringJSON);
        }        
    }

    addProduct(p : Product, qty : number) {
        if (this.map[p.ref] != undefined || this.map[p.ref] != null) {
            this.map[p.ref] += qty;
        } else {
            this.map[p.ref] = qty;
        }        
    }

    removeAll(p : Product) {
        this.map[p.ref] = 0;
    }

    remove(p : Product, qty : number) {
        if (this.map[p.ref] != undefined && this.map[p.ref] > qty) {
            this.map[p.ref] -= qty;
        } else {
            this.map[p.ref] = 0;
        } 
    }

    toString() {
        return JSON.stringify(this.map);
    }

    
}
