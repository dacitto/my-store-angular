import { CartItem } from './../../models/cart.d';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  constructor(private cartService: CartService) {}
  amount = 1;

  updateState(product: Product) {
    if (confirm(`Are you sure you want to add ${product.name} to cart ?`)) {
      const total = this.amount * product.price;
      const newPoduct: CartItem = { ...product, total, amount: this.amount };
      this.cartService.addToCart(newPoduct);
    }
  }

  onInputChange(amount: number) {
    this.amount = amount;
  }
  ngOnInit(): void {}
}
