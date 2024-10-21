import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './home/Product-home.component';
import { ProductNewComponent } from './new/Product-new.component';
import { ProductDetailComponent } from './detail/Product-detail.component';

const routes: Routes = [
  {path: '', component: ProductHomeComponent},
  { path: 'new', component: ProductNewComponent },
  { path: ':id', component: ProductDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Product-detail-permissions'
      }
    }
  },{
    path: ':product_id/CustomerFeedback', loadChildren: () => import('../CustomerFeedback/CustomerFeedback.module').then(m => m.CustomerFeedbackModule),
    data: {
        oPermission: {
            permissionId: 'CustomerFeedback-detail-permissions'
        }
    }
},{
    path: ':product_id/Inventory', loadChildren: () => import('../Inventory/Inventory.module').then(m => m.InventoryModule),
    data: {
        oPermission: {
            permissionId: 'Inventory-detail-permissions'
        }
    }
},{
    path: ':product_id/OrderDetail', loadChildren: () => import('../OrderDetail/OrderDetail.module').then(m => m.OrderDetailModule),
    data: {
        oPermission: {
            permissionId: 'OrderDetail-detail-permissions'
        }
    }
},{
    path: ':product_id/ProductSupplier', loadChildren: () => import('../ProductSupplier/ProductSupplier.module').then(m => m.ProductSupplierModule),
    data: {
        oPermission: {
            permissionId: 'ProductSupplier-detail-permissions'
        }
    }
},{
    path: ':product_id/Promotion', loadChildren: () => import('../Promotion/Promotion.module').then(m => m.PromotionModule),
    data: {
        oPermission: {
            permissionId: 'Promotion-detail-permissions'
        }
    }
},{
    path: ':product_id/ShipmentDetail', loadChildren: () => import('../ShipmentDetail/ShipmentDetail.module').then(m => m.ShipmentDetailModule),
    data: {
        oPermission: {
            permissionId: 'ShipmentDetail-detail-permissions'
        }
    }
}
];

export const PRODUCT_MODULE_DECLARATIONS = [
    ProductHomeComponent,
    ProductNewComponent,
    ProductDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }