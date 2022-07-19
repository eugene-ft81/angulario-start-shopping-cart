import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';

const ITEMS_KEY = 'cart_items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  addItem(item: Product) {
    this.items.push(item);
    this.saveToLocalStorage();    
  }

  getItems() {
    return this.items;
  }

  clear() {
    this.items = [];
    localStorage.removeItem(ITEMS_KEY);
  }  

  count() {
    return this.items.length;
  }

  loadFromLocalStorage(): void {
    this.items = JSON.parse(localStorage.getItem(ITEMS_KEY) || '[]');
  }

  saveToLocalStorage(): void {
    localStorage.setItem(ITEMS_KEY, JSON.stringify(this.items));
  }  
}
