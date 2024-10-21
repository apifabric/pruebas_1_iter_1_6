import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CustomerFeedback-card.component.html',
  styleUrls: ['./CustomerFeedback-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CustomerFeedback-card]': 'true'
  }
})

export class CustomerFeedbackCardComponent {


}