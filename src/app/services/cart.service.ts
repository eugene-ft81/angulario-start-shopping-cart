import { Product } from '../data/products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  add(product: Product) {
    this.items.push(product);
  }

  get() {
    return this.items;
  }

  clear() {
    this.items = [];
    return this.items;
  }  

  count() {
    return this.items.length;
  }
}
