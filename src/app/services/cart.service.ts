import { Injectable } from '@angular/core';
import { CartItem, CartList } from '../models/cart';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  CartList: CartList = [];
  constructor() {
    console.log('constructor called and value of Cartlist is', this.CartList);
  }

  addToCart(cartItem: CartItem) {
    const itemExist = this.CartList.some((item) => item.id === cartItem.id);
    if (!itemExist) {
      this.CartList.push(cartItem);
      return;
    }
    const index = this.CartList.findIndex((item) => item.id === cartItem.id);
    if (index !== -1) {
      const updatedObject: CartItem = {
        ...this.CartList[index],
        amount: this.CartList[index].amount + cartItem.amount,
        total: this.CartList[index].total + cartItem.total,
      };
      this.CartList = [
        ...this.CartList.slice(0, index),
        updatedObject,
        ...this.CartList.slice(index + 1),
      ];
    }
  }

  getCart(): CartList {
    console.log('cart list', this.CartList);
    return this.CartList;
  }
}
