import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './customermanagement/add-customer/add-customer.component';
import { AddEditCustomerComponent } from './customermanagement/add-edit-customer/add-edit-customer.component';
import { CustomermanagementComponent } from './customermanagement/customermanagement.component';
import { ShowCustomerComponent } from './customermanagement/show-customer/show-customer.component';
import { CustorderComponent } from './custorder/custorder.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { AddItemComponent } from './itemmanagement/add-item/add-item.component';
import { EditItemComponent } from './itemmanagement/edit-item/edit-item.component';
import { ItemmanagementComponent } from './itemmanagement/itemmanagement.component';
import { ShowitemsComponent } from './itemmanagement/showitems/showitems.component';
import { LoginComponent } from './login/login.component';
import { AddorderComponent } from './order-management/addorder/addorder.component';
import { EditorderComponent } from './order-management/editorder/editorder.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ShowordersComponent } from './order-management/showorders/showorders.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'Customermanagement',component:CustomermanagementComponent
  },
  {
    path:'itemmanagement',component:ItemmanagementComponent
  },
  {
    path:'ordermanagement',component:OrderManagementComponent
  },
  {
    path:'homepage', component:HomepageComponent
  },
  {
    path:'Customermanagement/appedit/:cid',component:AddEditCustomerComponent
  },
  {
    path:'',component:HomepageComponent
  },
  {
    path:'Customermanagement/addcustomer',component:AddCustomerComponent
  },
  {
    path:'itemmanagement/additem',component:AddItemComponent
  },
  {
    path:'ordermanagement/addorder',component:AddorderComponent
  },
  {
    path:'itemmanagement/edititem/:cid',component:EditItemComponent
  },
  {
    path:'ordermanagement/editorder/:cid',component:EditorderComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'custorder/:cid',component:CustorderComponent
  },
  {
    path:'itemlist/:cid',component:ItemlistComponent
  },
  {
    path:'Customermanagement/showcustomer',component:ShowCustomerComponent
  },
  {
    path:'itemmanagement/showitems',component:ShowitemsComponent
  },
  {
    path:'ordermanagement/showorders',component:ShowordersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
