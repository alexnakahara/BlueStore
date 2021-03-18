import { Client } from './client';
import { Product } from './product';

export class Order {
  id: number;
  code: string;
  client: Client;
  products: Product[];
}
