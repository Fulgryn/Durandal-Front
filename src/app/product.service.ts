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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { 
    this.products = PRODUCTS;
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product) {
    //this.myPonies.push(pony);
    //alert(JSON.stringify(pony));
    this.http.post<Product>(Config.restApi+'/produit', this.httpOptions).subscribe();
    
 }
}
