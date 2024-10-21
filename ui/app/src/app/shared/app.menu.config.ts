import { MenuRootItem } from 'ontimize-web-ngx';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { CustomerFeedbackCardComponent } from './CustomerFeedback-card/CustomerFeedback-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { InventoryCardComponent } from './Inventory-card/Inventory-card.component';

import { OrderCardComponent } from './Order-card/Order-card.component';

import { OrderDetailCardComponent } from './OrderDetail-card/OrderDetail-card.component';

import { ProductCardComponent } from './Product-card/Product-card.component';

import { ProductSupplierCardComponent } from './ProductSupplier-card/ProductSupplier-card.component';

import { PromotionCardComponent } from './Promotion-card/Promotion-card.component';

import { ShipmentCardComponent } from './Shipment-card/Shipment-card.component';

import { ShipmentDetailCardComponent } from './ShipmentDetail-card/ShipmentDetail-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'CustomerFeedback', name: 'CUSTOMERFEEDBACK', icon: 'view_list', route: '/main/CustomerFeedback' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'Inventory', name: 'INVENTORY', icon: 'view_list', route: '/main/Inventory' }
    
        ,{ id: 'Order', name: 'ORDER', icon: 'view_list', route: '/main/Order' }
    
        ,{ id: 'OrderDetail', name: 'ORDERDETAIL', icon: 'view_list', route: '/main/OrderDetail' }
    
        ,{ id: 'Product', name: 'PRODUCT', icon: 'view_list', route: '/main/Product' }
    
        ,{ id: 'ProductSupplier', name: 'PRODUCTSUPPLIER', icon: 'view_list', route: '/main/ProductSupplier' }
    
        ,{ id: 'Promotion', name: 'PROMOTION', icon: 'view_list', route: '/main/Promotion' }
    
        ,{ id: 'Shipment', name: 'SHIPMENT', icon: 'view_list', route: '/main/Shipment' }
    
        ,{ id: 'ShipmentDetail', name: 'SHIPMENTDETAIL', icon: 'view_list', route: '/main/ShipmentDetail' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CustomerCardComponent

    ,CustomerFeedbackCardComponent

    ,EmployeeCardComponent

    ,InventoryCardComponent

    ,OrderCardComponent

    ,OrderDetailCardComponent

    ,ProductCardComponent

    ,ProductSupplierCardComponent

    ,PromotionCardComponent

    ,ShipmentCardComponent

    ,ShipmentDetailCardComponent

    ,SupplierCardComponent

];