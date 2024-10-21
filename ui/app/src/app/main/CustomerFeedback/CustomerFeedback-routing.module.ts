import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFeedbackHomeComponent } from './home/CustomerFeedback-home.component';
import { CustomerFeedbackNewComponent } from './new/CustomerFeedback-new.component';
import { CustomerFeedbackDetailComponent } from './detail/CustomerFeedback-detail.component';

const routes: Routes = [
  {path: '', component: CustomerFeedbackHomeComponent},
  { path: 'new', component: CustomerFeedbackNewComponent },
  { path: ':id', component: CustomerFeedbackDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CustomerFeedback-detail-permissions'
      }
    }
  }
];

export const CUSTOMERFEEDBACK_MODULE_DECLARATIONS = [
    CustomerFeedbackHomeComponent,
    CustomerFeedbackNewComponent,
    CustomerFeedbackDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerFeedbackRoutingModule { }