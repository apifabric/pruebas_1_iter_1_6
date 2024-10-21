import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShipmentDetail-card.component.html',
  styleUrls: ['./ShipmentDetail-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShipmentDetail-card]': 'true'
  }
})

export class ShipmentDetailCardComponent {


}