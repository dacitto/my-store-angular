import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public totalItems: number = 0;
  private totalItemsSubscription!: Subscription;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.totalItemsSubscription = this.cartService.totalItems$.subscribe(
      (items) => {
        this.totalItems = items;
      }
    );
  }
}
