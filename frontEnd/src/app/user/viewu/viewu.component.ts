import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewu',
  templateUrl: './viewu.component.html',
  styleUrls: ['./viewu.component.css']
})
export class ViewuComponent implements OnInit {

  constructor(private service:UserService, private router:Router) { }
  public usuarios: Array<any>
  public nombre 
  public apellido
  public correo
  public libros
  ngOnInit(): void {
    this.user()
  }
  user(){
   this.nombre= localStorage.getItem('name')
   this.apellido= localStorage.getItem('lastname')
   this.correo= localStorage.getItem('email')
   this.libros = localStorage.getItem('libros')
    }
  
}
