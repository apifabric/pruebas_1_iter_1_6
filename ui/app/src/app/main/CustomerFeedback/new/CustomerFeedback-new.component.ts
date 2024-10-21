import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CustomerFeedback-new',
  templateUrl: './CustomerFeedback-new.component.html',
  styleUrls: ['./CustomerFeedback-new.component.scss']
})
export class CustomerFeedbackNewComponent {
  @ViewChild("CustomerFeedbackForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}