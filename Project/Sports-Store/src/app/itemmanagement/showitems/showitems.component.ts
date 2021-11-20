import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-showitems',
  templateUrl: './showitems.component.html',
  styleUrls: ['./showitems.component.css']
})
export class ShowitemsComponent implements OnInit {

 
  it:any;
  constructor(private service:SharedserviceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.service.getItemList().subscribe(data=>
      {
        
        this.it=data;
      })
  }
  
}
