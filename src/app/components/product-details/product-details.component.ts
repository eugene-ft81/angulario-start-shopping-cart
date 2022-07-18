import { CartService } from '../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../../data/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  
  constructor(private route: ActivatedRoute, private svc: CartService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const id = Number(params.get('id'));
    this.product = products.find(product => product.id === id);    
  }

  add(product: Product) {
    this.svc.add(product);
    window.alert(`product ${product.name} added to cart`);
  }
}
