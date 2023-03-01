import { SuccessPageComponent } from './pages/success-page/success-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'products/:id', component: ProductPageComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: '**', pathMatch: 'full', component: NotfoundPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
