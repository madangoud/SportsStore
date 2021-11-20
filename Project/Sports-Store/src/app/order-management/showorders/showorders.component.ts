import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-showorders',
  templateUrl: './showorders.component.html',
  styleUrls: ['./showorders.component.css']
})
export class ShowordersComponent implements OnInit {

  or:any;
  constructor(private service:SharedserviceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.service.getOrderList().subscribe(data=>
      {
        
        this.or=data;
      })
  }
}
