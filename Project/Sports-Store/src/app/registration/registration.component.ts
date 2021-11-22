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
    if(!this.addform.value.email ){
      
      alert("enter  Email Address")
      return;
    }
    if(!/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(this.addform.value.email))
    {
    
      alert("enter valid  Email Address")
      return;
    }
  if(this.addform.value.userName.length>=4 && this.addform.value.password.length>=4 && this.addform.value.confirmPassword.length>=4 && this.addform.value.password===this.addform.value.confirmPassword)
  {
    this.service.addUser(this.addform.value).subscribe(data=>
      {
        console.log(data);
       
        if(data.status=="success")
        {
          // alert("Sucess");
          this.route.navigateByUrl("login");
        }
        else{
          alert("failed to register");
        }
          
      });
  }
  else{
    alert("please enter valid length minimum 4 characters for each field")
  }
    // console.log(this.addform.value);
   
  }
 
}
