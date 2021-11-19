import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  addform:FormGroup=new FormGroup({
    
    orderDate:new FormControl(),
    customerNumber:new FormControl(),
    itemNumber:new FormControl(),
    deliveryDate:new FormControl(),
    paymentMode:new FormControl()
  })
  constructor(private service:SharedserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  Submit(){
    console.log(this.addform.value);
    this.service.addOrder(this.addform.value).subscribe(date=>
      {
        this.route.navigateByUrl("ordermanagement");
      });
  }

}
