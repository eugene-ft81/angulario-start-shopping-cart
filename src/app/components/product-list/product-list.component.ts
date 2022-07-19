import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = this.productsService.products;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.get().subscribe();
  }

  trackProduct(_: number, product: Product) {
    return product.id;
  }  
}
