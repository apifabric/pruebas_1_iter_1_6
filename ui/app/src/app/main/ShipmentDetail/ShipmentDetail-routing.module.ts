import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentDetailHomeComponent } from './home/ShipmentDetail-home.component';
import { ShipmentDetailNewComponent } from './new/ShipmentDetail-new.component';
import { ShipmentDetailDetailComponent } from './detail/ShipmentDetail-detail.component';

const routes: Routes = [
  {path: '', component: ShipmentDetailHomeComponent},
  { path: 'new', component: ShipmentDetailNewComponent },
  { path: ':id', component: ShipmentDetailDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShipmentDetail-detail-permissions'
      }
    }
  }
];

export const SHIPMENTDETAIL_MODULE_DECLARATIONS = [
    ShipmentDetailHomeComponent,
    ShipmentDetailNewComponent,
    ShipmentDetailDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentDetailRoutingModule { }