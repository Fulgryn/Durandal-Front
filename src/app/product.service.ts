import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './Product';
import { Observable, of } from 'rxjs';
import { Config } from './config';

@Injectable()
export class ProductService {
    products = new Array<Product>();

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
        this.products = [];
    }

    getProducts(): Observable<Object> {
        return this.http.get(Config.restApi.concat('/produits'));
    }

    getProductByID(id: number): Observable<Product> {
        return this.http.get<Product>(Config.restApi.concat('/produit'), { params: { 'id': "" + id } });
    }

    uploadImage(image: any) {
        return this.http.post(Config.restApi + '/uploadImage', image);
    }

    addProduct(product: Product) {
        return this.http.post<Product>(Config.restApi + '/addProduit', product, this.httpOptions);
    }
    isOrdered(): Observable<Object> {
        return this.http.get(Config.restApi.concat('/produitoredered'));
        // NOT WORKING
    }

    deleteProduct(product: Product) {
        return this.http.delete(Config.restApi + '/produit?id=' + product.id, this.httpOptions);
    }

    desactivateProduct(product: Product) {
        return this.http.get(Config.restApi + '/produit/desactivation?id=' + product.id, this.httpOptions);
    }

    activateProduct(product: Product) {
        return this.http.get(Config.restApi + '/produit/activation?id=' + product.id, this.httpOptions);
    }

    updateProduct(product: Product) {
        return this.http.put(Config.restApi + '/produit', product, this.httpOptions);
    }

}
