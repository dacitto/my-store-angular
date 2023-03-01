import { CartService } from './../../services/cart.service';
import { User } from 'src/app/models/user';
import { UserinfoService } from './../../services/userinfo.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss'],
})
export class SuccessPageComponent {
  user: User = {
    address: '',
    creditCardNumber: 0,
    fullName: '',
  };
  total: number = 0;

  constructor(
    private userinfoService: UserinfoService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.user = this.userinfoService.getUserInfos();
    this.total = this.cartService.getTotal();
  }
  resetInfo() {
    this.cartService.reset();
    this.userinfoService.reset();
    this.router.navigate(['/']);
  }
}
