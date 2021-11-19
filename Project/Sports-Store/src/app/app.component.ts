import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sports-Store';
 email:any=sessionStorage.getItem("email");
 
 Logout() {
   sessionStorage.removeItem("email");
   location.reload();
 }

}
