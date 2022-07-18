import { Product, products } from '../../data/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor() { }

  ngOnInit(): void {
    this.products = [...products];
  }
}
