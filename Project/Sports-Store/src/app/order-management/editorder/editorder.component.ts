import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  updateform:FormGroup=new FormGroup({
    orderNumber:new FormControl(),
    orderDate:new FormControl(),
    customerNumber:new FormControl(),
    itemNumber:new FormControl(),
    deliveryDate:new FormControl(),
    paymentMode:new FormControl()
  })
  constructor(private service:SharedserviceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.service.getbyOrderid(this.router.snapshot.params['cid']).subscribe(data=>
      {
        console.log(data);
        this.updateform=new FormGroup({ 
        orderNumber:new FormControl(data['orderNumber']),
        orderDate:new FormControl(data['orderDate']),
        customerNumber:new FormControl(data['customerNumber']),
        itemNumber:new FormControl(data['itemNumber']),
        deliveryDate:new FormControl(data['deliveryDate']),
        paymentMode:new FormControl(data['paymentMode'])
        })
      });
      this.updateform.get('id')?.disable();
  }
  Submit(){
    console.log(this.updateform.value);
    this.service.updateOrder(this.updateform.value, this.router.snapshot.params['cid']).subscribe(date=>
      {
        this.route.navigateByUrl("ordermanagement");
      }
    );
    this.route.navigateByUrl("ordermanagement");
  }

  get id() {
    return this.updateform.get('id');
  }
}
