import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public token = localStorage.getItem('token')
  title = 'Biblioteca';
 
  decode(){
    var decoded = jwt_decode(this.token); 
    console.log(decoded)
   }
}
