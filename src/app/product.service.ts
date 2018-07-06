import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './Product';

import { Observable, of } from 'rxjs';
import { Config } from './config';

@Injectable()
export class ProductService {
    products = new Array<Product>();
    // urlService: string;
    constructor(private http: HttpClient) {
        this.products = [];
    }

    getProducts() : Observable<Object> {
        
        return this.http.get(Config.restApi.concat('/produits'));
    }
    isOrdered() {
        return this.http.get(Config.restApi.concat('/produitoredered'));
        // NOT WORKING
    }

}
