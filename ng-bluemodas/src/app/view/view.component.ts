import { StateService } from './../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [StateService]
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
