import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedserviceService, private route:Router) { }
  loginform:FormGroup=new FormGroup({
    
   
    email:new FormControl(),
    password:new FormControl()
    
  })
  ngOnInit(): void {
  }
  Submit(){
    // console.log(this.loginform.value);
    this.service.login(this.loginform.value).subscribe(data=>
      {
        console.log(data.status);
        if(data.status=="success")
          {
            sessionStorage.setItem("email",this.loginform.controls['email'].value);
            // alert("login Success");
            location.reload();
            this.route.navigateByUrl("ordermanagement");
          }
          else{
            alert("login failed");
          }
      })
  }

}
