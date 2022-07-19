import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Product } from './../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] | undefined;
  form  = this.fb.group({
    name: '',
    address: ''      
  })

  constructor(private svc: CartService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.items = this.svc.getItems();
  }

  submit(): void {
    this.svc.clear();
    this.items = [];
    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }
}
