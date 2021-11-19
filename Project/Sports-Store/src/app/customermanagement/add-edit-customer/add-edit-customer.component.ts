import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {
  updateform:FormGroup=new FormGroup({
    customerNumber:new FormControl(),
    customerName:new FormControl(),
    contact:new FormControl(),
    address:new FormControl(),
    emailId:new FormControl()
  })
  constructor(private service:SharedserviceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.service.getbyid(this.router.snapshot.params['cid']).subscribe(data=>
      {
        console.log(data);
        this.updateform=new FormGroup({
          customerNumber:new FormControl(data['customerNumber']),
          customerName:new FormControl(data['customerName']),
          contact:new FormControl(data['contact']),
          address:new FormControl(data['address']),
          emailId:new FormControl(data['emailId'])
        })
      });
      this.updateform.get('id')?.disable();
  }
  Submit(){
    console.log(this.updateform.value);
    this.service.updateCustomer(this.updateform.value, this.router.snapshot.params['cid']).subscribe();
    this.route.navigateByUrl("Customermanagement");
  }
  get id() {
    return this.updateform.get('id');
  }
}
