import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StateService {
  carrinhoPlu$ = new BehaviorSubject<Product[]>([]);

}