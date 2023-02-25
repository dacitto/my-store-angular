import { Product } from './../../models/product.d';
import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';
import { CartList } from 'src/app/models/cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  products: CartList = [];
  total = this.cartService.getTotal();
  constructor(private cartService: CartService) {}
  updateAmount(product: Product, amount: number) {
    this.cartService.updateProductAmount(product, amount);
    this.products = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }
  removeProduct(product: Product) {
    this.cartService.removeFromCart(product);
    this.products = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }
  ngOnInit(): void {
    this.products = this.cartService.getCart();
    // Access the global state array in the service
    console.log(this.products);
  }
}
