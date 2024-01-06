import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Cart, CartItem } from '../models/cart';
import { Product } from '../models/product';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private selectedUser!: User
  private cartList: Cart[] = []

  constructor() {
  }

  getCartList(): Cart[] {
    return this.cartList;
  }

  getSelectedUser(): User | undefined {
    return this.selectedUser;
  }

  setSelectedUser(user: User) {
    this.selectedUser = user;
    if (this.getUserCart() == undefined) {
      this.cartList.push({ userId: user.id, id: this.cartList.length + 1, items: [] })
    }

    Swal.fire({
      position: "top-end",
      title: 'Selected User',
      text: user.fullName + ' is selected for shop',
      showConfirmButton: false,
      timer: 1500
    })
  }
  getUserCart(): Cart | undefined {
    return this.cartList.find(cart => cart.userId == this.selectedUser.id)
  }
  addProductInCart(product: Product) {
    let cart = this.getUserCart();
    if (cart == undefined) {
      Swal.fire({
        position: "top-end",
        title: 'Uups',
        text: 'Please select user.',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    let cartItem = cart.items.find(item => item.productId == product.id);
    if (cartItem == undefined) {
      cartItem = {
        cartId: cart.id,
        productId: product.id,
        count: 0,
        productName: product.name,
        productPrice: product.price
      };
      cart.items.push(cartItem)
    }
    cartItem.count++;
    Swal.fire({
      position: "top-end",
      title: 'Added product',
      text: product.name + ' added in cart',
      showConfirmButton: false,
      timer: 1500
    })
    // this.notifierService.notify('Added product',product.name+' added in cart');
  }

  calculateTotalItems(): number {
    let total = 0;

    if (this.selectedUser) {
      const userCart = this.cartList.find(cart => cart.userId === this.selectedUser.id);

      if (userCart) {
        for (const cartItem of userCart.items) {
          total += cartItem.count * cartItem.productPrice;
        }
      }
    }

    return total;
  }

  removeProductFromCart(cartItem: CartItem): void {
    const userCart = this.cartList.find(cart => cart.userId === this.selectedUser.id);

    if (userCart) {
      const itemIndex = userCart.items.findIndex(item => item.productId === cartItem.productId);

      if (itemIndex !== -1) {
        userCart.items.splice(itemIndex, 1);
      }
    }
  }


}
