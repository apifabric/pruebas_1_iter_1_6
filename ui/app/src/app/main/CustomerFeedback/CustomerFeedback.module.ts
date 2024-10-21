import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CUSTOMERFEEDBACK_MODULE_DECLARATIONS, CustomerFeedbackRoutingModule} from  './CustomerFeedback-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CustomerFeedbackRoutingModule
  ],
  declarations: CUSTOMERFEEDBACK_MODULE_DECLARATIONS,
  exports: CUSTOMERFEEDBACK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerFeedbackModule { }