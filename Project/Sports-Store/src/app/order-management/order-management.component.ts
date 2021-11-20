import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../classes/order';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {

  semail: any = sessionStorage.getItem("email");
  
  constructor(private service:SharedserviceService, private route: Router) { }
  orders:Order[]=[];
  searchText: string = "";
  displayItems: any= [];
 
  ngOnInit(): void {
    // location.reload();
  
    // if(this.count==1)
    //   location.reload();
 
    if(this.semail == null) {
      this.route.navigateByUrl("login");
    }
    this.refreshEmpList();
    this.service.getOrderList().subscribe(data=>
      {
        this.orders=data;
        
        console.log(data);
      })
  }
  refreshEmpList(){
    this.service.getOrderList().subscribe((data: any)=>{
      this.orders=data;
    });
  }
  delete(id:number){
    this.service.deleteOrder(id).subscribe(data=>{
    this.refreshEmpList();
    });
    
}
Submit(){
  
}
// Search() {
   
//   var str=
//   if(this.searchText != "") {
//     this.displayItems = this.orders.filter(item => {
    
//       return item.orderNumber.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
//     });
//     console.log(this.displayItems);
//   }
//   else {
//     this.displayItems = this.orders;
//   }
// }
}
