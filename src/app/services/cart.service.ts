import { Product } from './../models/product.d';
import { Injectable } from '@angular/core';
import { CartItem, CartList } from '../models/cart';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  CartList: CartList = [];
  private totalItems = new BehaviorSubject<number>(0);
  public totalItems$ = this.totalItems.asObservable();
  constructor() {
    console.log('constructor called and value of Cartlist is', this.CartList);
  }

  addToCart(cartItem: CartItem) {
    const itemExist = this.CartList.some((item) => item.id === cartItem.id);
    if (!itemExist) {
      this.CartList.push(cartItem);
      this.totalItems.next(this.CartList.length);
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

  removeFromCart(product: Product) {
    const confirmAlert = confirm(
      `❌ Are you sure you want to remove ${product.name} from cart 🛒?`
    );
    if (confirmAlert) {
      this.CartList = this.CartList.filter((item) => item.id != product.id);
      alert(`${product.name} has been removed from your cart.`);
      this.totalItems.next(this.CartList.length);
    }
  }

  getTotal() {
    return this.CartList.reduce(
      (accumulator, product) => accumulator + product.total,
      0
    );
  }
  reset() {
    this.CartList = [];
    this.totalItems.next(0);
  }

  updateProductAmount(product: Product, newAmount: number) {
    if (newAmount > 0) {
      const index = this.CartList.findIndex((item) => item.id === product.id);

      this.CartList[index].amount = newAmount;
      this.CartList[index].total = newAmount * this.CartList[index].price;
    }
  }
}
