import { Product } from './product';

export interface CartItem extends Product {
  amount: number;
  total: number;
}

export type CartList = CartItem[];
