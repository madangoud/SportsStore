import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../classes/customer';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-custorder',
  templateUrl: './custorder.component.html',
  styleUrls: ['./custorder.component.css']
})
export class CustorderComponent implements OnInit {

  cust:any;
  constructor(private service:SharedserviceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.service.getcustomerById(this.router.snapshot.params['cid']).subscribe(data=>
      {
        
        this.cust=data;
      })
  }
    
}



