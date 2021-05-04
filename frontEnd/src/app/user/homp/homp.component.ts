import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-homp',
  templateUrl: './homp.component.html',
  styleUrls: ['./homp.component.css']
})
export class HompComponent implements OnInit {

  constructor( private router:Router) { }

  token = localStorage.getItem('token')
  mm = localStorage.getItem('des')
  ngOnInit(): void {
  }
  decode(){
    var decoded = jwt_decode(this.token); 
    localStorage.setItem('des',decoded.username)
    localStorage.setItem('userID',decoded.sub)
    console.log(decoded)
    this.router.navigateByUrl('/bilioteca/readbooks')
   }
   alv(){
    this.router.navigateByUrl('/bilioteca/logout')
   }
}
