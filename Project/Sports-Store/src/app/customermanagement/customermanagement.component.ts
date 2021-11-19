import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../classes/customer';
import { SharedserviceService } from '../sharedservice.service';
@Component({
  selector: 'app-customermanagement',
  templateUrl: './customermanagement.component.html',
  styleUrls: ['./customermanagement.component.css']
})
export class CustomermanagementComponent implements OnInit {

  semail: any = sessionStorage.getItem("email");
  constructor(private service:SharedserviceService, private route: Router) { }
  customers:Customer[]=[];
  searchText: string = "";
  displayItems: any= [];
  ngOnInit(): void {
    if(this.semail == null) {
      this.route.navigateByUrl("login");
    }
    this.refreshEmpList();
    this.service.getcustomerList().subscribe(data=>
      {
        this.customers=data;
       this.displayItems=this.customers;
        console.log(data);
      })
  }
  Search() {
   
    if(this.searchText != "") {
      this.displayItems = this.customers.filter(item => {
      
        return item.customerName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      });
      console.log(this.displayItems);
    }
    else {
      this.displayItems = this.customers;
    }
  }
  refreshEmpList(){
    this.service.getcustomerList().subscribe((data: any)=>{
      this.customers=data;
    });
  }
  delete(id:number){
    this.service.deleteCustomer(id).subscribe(data=>{
    this.refreshEmpList();
    });
    
  }
 
}
