import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { CartItem } from 'src/app/models/cart';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  productId: string = '';
  product!: Product;
  amount: number = 1;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private cartService: CartService
  ) {}

  updateState(product: Product) {
    if (confirm(`Are you sure you want to add ${product.name} to cart 🛒?`)) {
      const total = this.amount * product.price;
      const newPoduct: CartItem = { ...product, total, amount: this.amount };
      this.cartService.addToCart(newPoduct);
    }
  }

  onInputChange(amount: number) {
    this.amount = amount;
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') ?? '';

    this.httpService.getProducts().subscribe((data) => {
      console.log(data.filter((item) => item.id === Number(this.productId)));
      this.product = data.filter(
        (item) => item.id === Number(this.productId)
      )[0];
    });
  }
}
