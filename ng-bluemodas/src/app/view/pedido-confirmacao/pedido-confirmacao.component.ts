import { Order } from './../../models/order';
import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-pedido-confirmacao',
  templateUrl: './pedido-confirmacao.component.html',
  styleUrls: ['./pedido-confirmacao.component.scss']
})
export class PedidoConfirmacaoComponent {

  constructor(private state: StateService) { }

  dataLoaded: Order = this.state.confimationOrder$.getValue();

  get nuValorTotal() {
    return this.dataLoaded.products.reduce((a, i) => a + i.price * i.quantity, 0)
  }

}
