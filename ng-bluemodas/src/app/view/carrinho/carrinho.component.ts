import { OrderService } from './../../services/order.service';
import { Order } from './../../models/order';
import { Product } from './../../models/product';
import { StateService } from './../../services/state.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    private state: StateService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private orderService: OrderService
  ) { }

  @ViewChild('nuItens') select: ElementRef;
  dataLoaded: Product[] = [];
  size = Array(100);
  form: FormGroup;

  ngOnInit(): void {
    this.state.carrinhoPlu$.subscribe(resp => {
      this.dataLoaded = resp;
    })
    this.buildForm();
  }

  submit(longContent) {
    const newArr = this.dataLoaded.map((i, index) => {
      let select: HTMLSelectElement = document.querySelector('#nuProdutos' + index);
      return {
        ...i,
        quantity: +select.value
      }
    });

    this.state.carrinhoPlu$.next(newArr);
    this.modalService.open(longContent, { scrollable: true });
  }

  finalizar() {
    const order: Order = {
      id: 0,
      code: '',
      client: {
        id: 0,
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone
      },
      products: this.state.carrinhoPlu$.getValue()
    };

    this.orderService.emitOrder(order).subscribe({
      next: resp => {
        console.log('🚀 ~ file: carrinho.component.ts ~ line 63 ~ CarrinhoComponent ~ this.orderService.emitOrder ~ resp', resp);
      },
      error: err => {
        console.error('Error => ', err);
        alert('Não foi possível finalizar o pedido, tente novamente mais tarde');
      }
    });
  }

  private buildForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required]
    })
  }

}
