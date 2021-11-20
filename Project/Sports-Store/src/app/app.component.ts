import { Component } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { SharedserviceService } from './sharedservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service:SharedserviceService){

  }
  title = 'Sports-Store';
 email:any=sessionStorage.getItem("email");
 
 Logout() {
   sessionStorage.removeItem("email");
  //  location.reload();
 }

}
