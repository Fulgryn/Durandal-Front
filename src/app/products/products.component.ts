import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Product } from './../product';
import { ProductService } from '../product.service';
import { SelectItem, Message } from 'primeng/api';
import { Config } from '../config';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements DoCheck, OnInit {


    @Input() admin: boolean;
    products: Array<Product>;
    newproducts: Array<Product>;
    router: Router;

    selectedProduct: Product;

    displayDialog: boolean;
    displayDialog2: boolean;
    displayDialog3: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    isOrdered = true; // EN ATTENDANT LES COMMANDES

    msgs: Message[];

    constructor(private productService: ProductService, private cartService: CartService) {
        this.productService = productService;
        this.products = [];
        this.newproducts = this.products;
    }

    ngDoCheck() {
        if (this.newproducts !== this.products) {
            this.newproducts = this.products;
        }
    }
    ngOnInit() {
        this.productService.getProducts().subscribe((prods: Array<Product>) => {
            this.products = prods;
            setTimeout(() => {
                this.sortField = "price";
                this.sortOrder = 1;
            }, 50);
            console.log(this.products);
        });


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
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Produit ajouté au panier', detail: '' });
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
    picture(pictPath) {
        return Config.restApi + pictPath;
    }

    hide() {
        this.displayDialog2 = true;
        event.preventDefault();
    }

    updateProduct(event: Event, product: Product) {
        this.productService.updateProduct(product);
        this.displayDialog2 = false;
        event.preventDefault();

        // refresh des données en bases :
        // this.productService.getProducts().subscribe((prods: Array<Product>) => this.products = prods);

    }
    delProduct(event: Event, product: Product) {
        //
        // this.newproducts = this.products.splice(this.products.lastIndexOf( product) );
        // this.products =[...this.newproducts];

        this.productService.deleteProduct(product).subscribe(() => {
            this.productService.getProducts().subscribe((prods: Array<Product>) => {
                this.products = prods;
                console.log(this.products);
                setTimeout(() => {
                    this.sortOrder = -this.sortOrder;
                    console.log(this.products);
                    setTimeout(() => {
                        this.sortOrder = -this.sortOrder;
                        console.log(this.products);
                    }, 0);
                }, 0);
            });
        });
        this.displayDialog2 = false;
        event.preventDefault();


        // reload pas au bon path :(
        // location.reload();
    }


    desactivateProduct(event: Event, product: Product) {
        this.productService.desactivateProduct(product);
        this.displayDialog2 = false;
        event.preventDefault();
        this.productService.getProducts().subscribe((prods: Array<Product>) => this.products = prods);


    }
    activateProduct(event: Event, product: Product) {
        this.productService.desactivateProduct(product);
        this.displayDialog3 = false;
        this.productService.getProducts().subscribe((prods: Array<Product>) => this.products = prods);

    }
}
