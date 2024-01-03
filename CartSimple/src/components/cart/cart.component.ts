import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../models/cart';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() carts: Cart[] = [];
  @Output() addCartItem: EventEmitter<number> = new EventEmitter();
  @Output() minusCartItem: EventEmitter<number> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }
  getTotal(): number {
    let total = 0;
    this.carts.map(cart => cart.count).forEach(count => {
      total += count;
    })
    return total;
  }
}