import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../classes/item';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-itemmanagement',
  templateUrl: './itemmanagement.component.html',
  styleUrls: ['./itemmanagement.component.css']
})
export class ItemmanagementComponent implements OnInit {

  semail: any = sessionStorage.getItem("email");
  
  constructor(private service:SharedserviceService, private route:Router) { }
items:Item[]=[];
searchText: string = "";
dItems: any= [];
  ngOnInit(): void {
    if(this.semail == null) {
      this.route.navigateByUrl("login");
    }
    this.refreshEmpList();
    
    this.service.getItemList().subscribe(data=>
      {
        this.items=data;
        this.dItems=this.items;
        console.log(data);
      })
  }
  refreshEmpList(){
    this.service.getItemList().subscribe((data: any)=>{
      this.items=data;
    });
  }
  delete(id:number){
    this.service.deleteItem(id).subscribe(data=>{
    
      location.reload();
    });
    
  }
  Search() {
   
    if(this.searchText != "") {
      this.dItems = this.items.filter(item => {
        return item.itemName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      });  
      console.log(this.dItems);
    }
    else {
      this.dItems = this.items;
    }
  }


}
