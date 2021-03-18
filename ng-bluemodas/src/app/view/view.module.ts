import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PedidoConfirmacaoComponent } from './pedido-confirmacao/pedido-confirmacao.component';
@NgModule({
  declarations: [
    ViewComponent,
    HeaderComponent,
    HomeComponent,
    CarrinhoComponent,
    PedidoConfirmacaoComponent,
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class ViewModule { }
