import { Injectable } from '@angular/core';

import { BehaviorSubject, EMPTY, Observable, of, tap } from 'rxjs';

import { Product } from './../models/product.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = new BehaviorSubject<Product[]>([]);

  constructor(private apiService: ApiService) {}

  get(): Observable<Product[]> {
    return this.apiService.get<Product[]>('products')
      .pipe(tap((products: Product[]) => this.products.next(products)));
  }

  find(id: number): Observable<Product | never> {
    const item = this.products.getValue().find((i) => i.id === id);
    if (!item) {
      return EMPTY;
    }
    return of(item);
  }  
}
