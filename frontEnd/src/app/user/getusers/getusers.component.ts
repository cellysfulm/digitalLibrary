import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from "../../services/user.service";
import {UserI} from "../../interfaces/user";
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
//import { threadId } from 'worker_threads';
@Component({
  selector: 'app-login',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetUsers implements OnInit {
  public usuarios: Array<any>
  public token = localStorage.getItem('token')
  public char:string
  public charco:string
  public charcas:string
  public charro:string
  public libros:any
  constructor(private authService:UserService, private router:Router) { }
  mm = localStorage.getItem('des')
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.authService.getUsers().subscribe(res =>{
      console.log(this.token.sub);
      this.usuarios = res
    })
  }

  takeData(usua: UserI,):any{//<= botón
    console.log(usua._id)
    this.router.navigateByUrl('/bilioteca/updateuser')
    this.authService.selectedUser = usua
    this.char =  usua._id
    localStorage.setItem("hola",this.char)
    console.log("ff " + this.char);
    return this.char

  }
  deletData(usua: UserI,):any{//<= botón
    console.log(usua._id)
    this.router.navigateByUrl('/bilioteca/deleteuser')
    this.authService.selectedUser = usua
    this.char =  usua._id
    this.charco = usua.name
    this.charcas =  usua.lastname
    this.charro = usua.email
    localStorage.setItem("hola",this.char)
    localStorage.setItem("nombre",this.charco)
    localStorage.setItem("apellido",this.charcas)
    localStorage.setItem("correo",this.charro)
    return this.char

  }
  ver(usua: UserI,):any{//<= botón
    this.router.navigateByUrl('/bilioteca/viesuser')
    this.authService.selectedUser = usua
    this.char =  usua._id
    this.charco = usua.name
    this.charcas =  usua.lastname
    this.charro = usua.email
    this.libros = usua.libros
    localStorage.setItem("name",this.charco)
    localStorage.setItem("lastname",this.charcas)
    localStorage.setItem("email",this.charro)
    localStorage.setItem("libros",this.libros)
    localStorage.setItem("email",this.charro)
    return this.char

  }
  alv(){
    this.router.navigateByUrl('/bilioteca/logout')
   }

   
    
} 

