import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  private readonly _baseUrl = 'https://bluestore.azurewebsites.net/api';


  emitOrder(order: Order): Observable<Order> {
    const url = this._baseUrl + '/order/add';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.httpClient.post<Order>(url, order, httpOptions);

  }

}
