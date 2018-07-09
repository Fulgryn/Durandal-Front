import { Component, DoCheck, OnInit, Input } from '@angular/core';
import { Product } from './../product';
import { ProductService } from '../product.service';
import { SelectItem } from 'primeng/api';
import { Config } from '../config';
import { Router } from '@angular/router';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements DoCheck, OnInit {


    @Input() admin: boolean;
    products: Array<Product>;
    newproducts: Array<Product>;
    router : Router;

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
        this.newproducts = this.products;
    }

    ngDoCheck() {
        if (this.newproducts !== this.products) {
            this.newproducts = this.products;
        }
    }
    ngOnInit() {
        this.productService.getProducts().subscribe((prods: Array<Product>) => {this.products = prods ; console.log(this.products);});


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

        //refresh des données en bases :
        this.productService.getProducts().subscribe((prods: Array<Product>) => this.products = prods);

    }
    delProduct(event: Event, product: Product) {
        //
        // this.newproducts = this.products.splice(this.products.lastIndexOf( product) );
        // this.products =[...this.newproducts];

        this.productService.deleteProduct(product);
        this.displayDialog2 = false;
        event.preventDefault();

        this.productService.getProducts().subscribe((prods: Array<Product>) => this.products = prods);

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
