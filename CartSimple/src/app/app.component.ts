import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { CartComponent } from "../components/cart/cart.component";
import { Cart } from '../models/cart';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ProductComponent, CartComponent]
})
export class AppComponent {
  title = 'CartSimple';
  cartList:Cart[]=[{
    productId:1,
    count:5
  }]
  addCartItem(productId:number){
    let cart= this.cartList.find(cart=>cart.productId==productId)
    if(cart==undefined){
      this.cartList.push({productId:productId,count:1});
    }else{
      cart.count++;
    }
  }
  minusCartItem(productId:number){
    let cartIndex=this.cartList.findIndex(cart=>cart.productId==productId)
    if(cartIndex>=0){
      this.cartList[cartIndex].count--;
      if(this.cartList[cartIndex].count==0){
        this.cartList.splice(cartIndex, 1)
      }
    }
  }
  removeCartItem(productId:number){
    let cartIndex=this.cartList.findIndex(cart=>cart.productId==productId)
    if(cartIndex>=0){
        this.cartList.splice(cartIndex, 1)
    }
  }
}