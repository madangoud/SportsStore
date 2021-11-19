import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addform:FormGroup=new FormGroup({
    // customerNumber:new FormControl(),
    customerName:new FormControl(),
    contact:new FormControl(),
    address:new FormControl(),
    emailId:new FormControl()
  })
  constructor(private service:SharedserviceService,private route:Router) { }


  ngOnInit(): void {


  }
Submit(){
  console.log(this.addform.value);
  this.service.addCustomer(this.addform.value).subscribe(date=>
    {
      this.route.navigateByUrl("Customermanagement");
    });
}
}
