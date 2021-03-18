import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoConfirmacaoComponent } from './pedido-confirmacao.component';

describe('PedidoConfirmacaoComponent', () => {
  let component: PedidoConfirmacaoComponent;
  let fixture: ComponentFixture<PedidoConfirmacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoConfirmacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
