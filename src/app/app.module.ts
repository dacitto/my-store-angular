import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductCardComponent,
    CartFormComponent,
    HomePageComponent,
    CartPageComponent,
    NotfoundPageComponent,
    ProductPageComponent,
    SuccessPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
