import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedserviceService } from 'src/app/sharedservice.service';
@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  
  cust:any;
  constructor(private service:SharedserviceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.service.getcustomerList().subscribe(data=>
      {
        
        this.cust=data;
      })
  }
}

