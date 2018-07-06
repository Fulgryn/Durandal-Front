import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    this.http.post<Product>(Config.restApi + '/addProduit', product, this.httpOptions).subscribe();

 }
  isOrdered(): Observable<Object> {
    return this.http.get( Config.restApi.concat('/produitoredered'));
    // NOT WORKING
  }

  deleteProduct(product: Product, callback)  {
    return this.http.delete(Config.restApi + '/produit?id=' + product.id, this.httpOptions).subscribe(callback);
  }

  desactivateProduct(product: Product)  {
    return this.http.get(Config.restApi + '/produit/desactivation?id=' + product.id, this.httpOptions).subscribe();
  }
  activateProduct(product: Product)  {
    return this.http.get(Config.restApi + '/produit/activation?id=' + product.id, this.httpOptions).subscribe();
  }
  updateProduct(product: Product)  {

    return this.http.put(Config.restApi + '/produit', product , this.httpOptions).subscribe( );
  }

}
