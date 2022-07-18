import { Product } from '../../data/products';
import { CartService } from '../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    this.items = this.svc.get();
  }

  submit(): void {
    this.items = this.svc.clear();
    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }
}
