import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

import { ProductsService } from './../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Observable<Product> | undefined;

  constructor(private route: ActivatedRoute, 
    private productsService: ProductsService, 
    private cartService: CartService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const id = Number(params.get('id'));
    this.product = this.productsService.find(id);
  }

  add(product: Product) {
    this.cartService.addItem(product);
    window.alert(`product ${product.name} added to cart`);
  }
}
