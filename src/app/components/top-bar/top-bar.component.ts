import { CartService } from '../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private svc: CartService) { }

  ngOnInit(): void {
  }

  count() {
    return this.svc.count();
  }
}
