import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
