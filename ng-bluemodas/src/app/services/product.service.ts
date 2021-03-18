import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  private readonly _baseUrl = 'https://bluestore.azurewebsites.net/api';

  listAvailProducts(): Observable<Product[]> {
    const url = this._baseUrl + '/product/list';
    return this.httpClient.get<Product[]>(url);
  }

}
