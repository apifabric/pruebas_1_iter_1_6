import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SHIPMENTDETAIL_MODULE_DECLARATIONS, ShipmentDetailRoutingModule} from  './ShipmentDetail-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ShipmentDetailRoutingModule
  ],
  declarations: SHIPMENTDETAIL_MODULE_DECLARATIONS,
  exports: SHIPMENTDETAIL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShipmentDetailModule { }