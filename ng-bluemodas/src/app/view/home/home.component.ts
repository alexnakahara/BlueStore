import { StateService } from './../../services/state.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private state: StateService
  ) { }

  dataLoaded: Product[] = [];

  ngOnInit(): void {
    this.productService.listAvailProducts().subscribe({
      next: resp => this.dataLoaded = resp,
      error: err => alert(':Ocorreu um erro! tente novamente mais tarde')
    });
  }

  addCarrinho(item: Product) {
    let productsSelected: Product[] = this.state.carrinhoPlu$.getValue();

    if (productsSelected.some(i => i.id === item.id)) {
      productsSelected = productsSelected.filter(i => i.id !== item.id);
      console.log('🚀 ~ file: home.component.ts ~ line 32 ~ HomeComponent ~ addCarrinho ~ productsSelected', productsSelected)
      this.state.carrinhoPlu$.next(productsSelected);
      return;
    }

    this.state.carrinhoPlu$.next([...productsSelected, item])
  }

}
