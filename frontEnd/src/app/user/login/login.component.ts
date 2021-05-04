import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService} from "../../services/user.service";
import {UserI} from "../../interfaces/user";
import jwt_decode from "jwt-decode";
//import { threadId } from 'worker_threads';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServide:UserService, private router:Router) { }
  token = localStorage.getItem('token')
  ngOnInit(){
  
  }
  onLogin(form):void{
  this.authServide.login(form.value).subscribe(res =>{
    console.log(form.value);
    this.authServide.setToken(res['token']);
    this.router.navigateByUrl('/bilioteca/home')
  })
    
  }
  decode(){
    var decoded = jwt_decode(this.token); 
    console.log(decoded)
   }
}
