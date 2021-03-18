import { Order } from './../../models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-confirmacao',
  templateUrl: './pedido-confirmacao.component.html',
  styleUrls: ['./pedido-confirmacao.component.scss']
})
export class PedidoConfirmacaoComponent implements OnInit {

  constructor() { }

  dataLoaded: Order = {
    id: 5,
    code: 'fnejnf90',
    client: {
      name: 'Alexnader',
      email: 'lexnalndfnd@amdm',
      id: 4,
      phone: '11 9956565'
    },
    products: [
      {
        id: 15,
        name: 'alkdfkla',
        image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/895/331/products/calca-sarja-bege-10711030201001-frente1-b7cd59a1e63c2fc4d215537992039137-640-0.jpg',
        price: 1545,
        quantity: 15
      },
      {
        id: 15,
        name: 'alkdfkla',
        image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/895/331/products/calca-sarja-bege-10711030201001-frente1-b7cd59a1e63c2fc4d215537992039137-640-0.jpg',
        price: 1545,
        quantity: 15
      },
      {
        id: 15,
        name: 'alkdfkla',
        image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/895/331/products/calca-sarja-bege-10711030201001-frente1-b7cd59a1e63c2fc4d215537992039137-640-0.jpg',
        price: 1545,
        quantity: 15
      }
    ]
  }

  ngOnInit(): void {
  }

}
