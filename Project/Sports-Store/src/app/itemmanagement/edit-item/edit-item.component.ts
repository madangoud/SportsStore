import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  updateform:FormGroup=new FormGroup({
    itemNumber:new FormControl(),
    itemName:new FormControl(),
    itemValue:new FormControl(),
    color:new FormControl(),
    size:new FormControl()
  })
  constructor(private service:SharedserviceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.service.getbyItemid(this.router.snapshot.params['cid']).subscribe(data=>
      {
        console.log(data);
        this.updateform=new FormGroup({
         itemNumber:new FormControl(data['itemNumber']),
          itemName:new FormControl(data['itemName']),
          itemValue:new FormControl(data['itemValue']),
          color:new FormControl(data['color']),
          size:new FormControl(data['size'])
        })
      });
      this.updateform.get('id')?.disable();
  }
  Submit(){
    console.log(this.updateform.value);
    this.service.updateItem(this.updateform.value, this.router.snapshot.params['cid']).subscribe(date=>
      {
        this.route.navigateByUrl("itemmanagement");
      }
    );
    this.route.navigateByUrl("itemmanagement");
  }






  get id() {
    return this.updateform.get('id');
  }

}
