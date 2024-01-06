import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../models/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  totalPrice: number = 0;
  constructor(public cartService: CartService) { }

  calculateItemTotal(cartItem: CartItem): number {
    this.totalPrice = cartItem.count * cartItem.productPrice;
    return this.totalPrice;
  }
}