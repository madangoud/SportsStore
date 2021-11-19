import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validator,FormArray, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  addform:FormGroup=new FormGroup({
    
    userName:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    confirmPassword:new FormControl()
   
  })
  constructor(private service:SharedserviceService,private route:Router) { }
 
  ngOnInit(): void {
  }
  Submit(){
    // console.log(this.addform.value);
    this.service.addUser(this.addform.value).subscribe(data=>
      {
        console.log(data);
       
        if(data.status=="success")
        {
          alert("Sucess");
          this.route.navigateByUrl("login");
        }
        else{
          alert("failed to register");
        }
          
      });
  }
 
}
