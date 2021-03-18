import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HomeComponent } from './home/home.component';
import { PedidoConfirmacaoComponent } from './pedido-confirmacao/pedido-confirmacao.component';
import { ViewComponent } from './view.component';


const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'cesta-compras',
        component: CarrinhoComponent
      },
      {
        path: 'confirmar-pedido',
        component: PedidoConfirmacaoComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
