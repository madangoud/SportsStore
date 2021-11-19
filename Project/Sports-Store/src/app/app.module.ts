import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomermanagementComponent } from './customermanagement/customermanagement.component';
import { ItemmanagementComponent } from './itemmanagement/itemmanagement.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { SharedserviceService } from './sharedservice.service';
import { ShowCustomerComponent } from './customermanagement/show-customer/show-customer.component';
import { AddEditCustomerComponent } from './customermanagement/add-edit-customer/add-edit-customer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCustomerComponent } from './customermanagement/add-customer/add-customer.component';
import { AddItemComponent } from './itemmanagement/add-item/add-item.component';
import { EditItemComponent } from './itemmanagement/edit-item/edit-item.component';
import { AddorderComponent } from './order-management/addorder/addorder.component';
import { EditorderComponent } from './order-management/editorder/editorder.component';
import { FilterPipe } from './filter.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CustorderComponent } from './custorder/custorder.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomermanagementComponent,
    ItemmanagementComponent,
    OrderManagementComponent,
    ShowCustomerComponent,
    AddEditCustomerComponent,
    HomepageComponent,
    AddCustomerComponent,
    AddItemComponent,
    EditItemComponent,
    AddorderComponent,
    EditorderComponent,
    FilterPipe,
    RegistrationComponent,
    LoginComponent,
    CustorderComponent,
    ItemlistComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
