import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './Product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductService {
  products = new Array<Product>();
  //urlService: string;
  constructor() { 
    this.products = PRODUCTS;
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);     
  }
}
