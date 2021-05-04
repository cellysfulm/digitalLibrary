import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  public books: Array<any>
  constructor(private authService:UserService, private router:Router) { }

  ngOnInit(): void {
    
  }
  cerrar(){
    this.authService.logOut()
    this.router.navigateByUrl('/bilioteca/home')
  }
}
