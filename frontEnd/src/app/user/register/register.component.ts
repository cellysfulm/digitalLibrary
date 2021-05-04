import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from "../../services/user.service";
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(public authService:UserService, private router:Router) { }

  ngOnInit(): void {
   
  }
  register(form:NgForm){
    this.authService.register( this.authService.selectedUser ).subscribe(
      res => {
      console.log(res);
      this.router.navigateByUrl('/bilioteca/readusers')
   })
  }

}
