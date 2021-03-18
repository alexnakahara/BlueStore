import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../models/order';

@Injectable()
export class StateService {
  carrinhoPlu$ = new BehaviorSubject<Product[]>([]);
  confimationOrder$ = new BehaviorSubject<Order>(null);
}