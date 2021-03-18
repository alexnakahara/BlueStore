import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private state: StateService) { }

  nuItens = 0;

  ngOnInit() {
    this.state.carrinhoPlu$.subscribe(resp => {
      this.nuItens = resp.length
    })
  }

}
