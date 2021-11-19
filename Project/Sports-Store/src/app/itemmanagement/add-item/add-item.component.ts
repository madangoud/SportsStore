import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addform:FormGroup=new FormGroup({
    // customerNumber:new FormControl(),

    itemName:new FormControl(),
    itemValue:new FormControl(),
    color:new FormControl(),
    size:new FormControl()
  })
  constructor(private service:SharedserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  Submit(){
    console.log(this.addform.value);
    this.service.addItem(this.addform.value).subscribe(date=>
      {
        this.route.navigateByUrl("itemmanagement");
      });
  }
}
