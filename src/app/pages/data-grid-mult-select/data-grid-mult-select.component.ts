import { Component, OnInit, enableProdMode } from '@angular/core';
import { Sale, OrderService } from 'src/app/shared/services/order.service';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-data-grid-mult-select',
  templateUrl: './data-grid-mult-select.component.html',
  styleUrls: ['./data-grid-mult-select.component.scss']
})
export class DataGridMultSelectComponent implements OnInit {

  ngOnInit() {
  }

  sales: Sale[];
  allMode: string;
  checkBoxesMode: string;

  constructor(service:OrderService) {
      this.sales = service.getSales();
      this.allMode = 'allPages';
      this.checkBoxesMode = 'always';
  }



}
