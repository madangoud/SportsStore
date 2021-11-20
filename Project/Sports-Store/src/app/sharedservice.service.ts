import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './classes/customer';
import { Customeradd } from './classes/customeradd';
import { Item } from './classes/item';
import { Itemadd } from './classes/itemadd';
import { Order } from './classes/order';
import { Orderadd } from './classes/orderadd';
import { Registration } from './classes/registration';
import { Login } from './classes/login';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  readonly APIUrl="http://localhost:32848/api";
  constructor(private http: HttpClient) { }


  //Customer Management
  getcustomerList():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.APIUrl+'/Customers');

  }
  addCustomer(val:Customeradd){
    return this.http.post(this.APIUrl+'/Customers',JSON.stringify(val),this.httpOptions);
  }
  updateCustomer(val:Customer,id:number){
   return this.http.put(this.APIUrl+'/Customers/'+id,JSON.stringify(val),this.httpOptions);
 }
 deleteCustomer(id:number):Observable<any>{
   return this.http.delete<any>(this.APIUrl+'/Customers/'+id);
 }
 getbyid(val:number){
   return this.http.get<Customer>(this.APIUrl+"/Customers/"+val);
 }

//Item Management
 updateItem(val:Item,id:number){
  return this.http.put(this.APIUrl+'/Items/'+id,JSON.stringify(val),this.httpOptions);
}

 getItemList():Observable<Item[]>
 {
   return this.http.get<Item[]>(this.APIUrl+'/Items');
  }
  addItem(val:Itemadd){
    return this.http.post(this.APIUrl+'/Items',JSON.stringify(val),this.httpOptions);
  }
  deleteItem(id:number):Observable<any>{
    return this.http.delete<any>(this.APIUrl+'/Items/'+id);
  }
  getbyItemid(val:number){
    return this.http.get<Item>(this.APIUrl+"/Items/"+val);
  }


  //order Management

  updateOrder(val:Item,id:number){
    return this.http.put(this.APIUrl+'/Orders/'+id,JSON.stringify(val),this.httpOptions);
  }
  
   getOrderList():Observable<Order[]>
   {
     return this.http.get<Order[]>(this.APIUrl+'/Orders');
    }
    addOrder(val:Orderadd){
      return this.http.post(this.APIUrl+'/Orders',JSON.stringify(val),this.httpOptions);
    }
    deleteOrder(id:number):Observable<any>{
      return this.http.delete<any>(this.APIUrl+'/Orders/'+id);
    }
   getbyOrderid(val:number){
      return this.http.get<Order>(this.APIUrl+"/Orders/"+val);
    }


  //registration Management
  addUser(val:Registration): Observable<any>{
    return this.http.post<any>(this.APIUrl+'/Registrations',JSON.stringify(val),this.httpOptions);
  }
  //login
  login(val:Login){
    return this.http.post<any>(this.APIUrl+'/Login/login',JSON.stringify(val),this.httpOptions);
  }


  //ordermanagement
  getcustomerById(val:number){
    return  this.http.get<Customer>(this.APIUrl+"/Customers/orderlist/"+val);
  }
  getitemById(val:number){
    return  this.http.get<Item>(this.APIUrl+"/Items/itemlist/"+val);
  }

  isTokenExpired(){

    const token = sessionStorage.getItem('email')
    
    if(token)
    {
  
          return true 
    }
    else
    {
      return false
    }
  }




  }

 
