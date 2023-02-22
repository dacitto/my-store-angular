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
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getCart();
    // Access the global state array in the service
    console.log(this.products);
  }
}
