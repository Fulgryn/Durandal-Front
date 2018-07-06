import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './Product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { Config } from './config';

@Injectable()
export class ProductService {
  products = new Array<Product>();
  // urlService: string;
  constructor(private http: HttpClient) {
    this.products = PRODUCTS;
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductByID(id : number) : Observable<Product> { 
    return this.http.get<Product>(Config.restApi.concat('/produit'), {params : {'id' : ""+id}}); 
  }

  isOrdered(): Observable<Object> {
    return this.http.get( Config.restApi.concat('/produitoredered'));
    // NOT WORKING
  }

}
