import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  ident: string
  nom: string
  ape: string
  mail: string
  constructor(public authService:UserService, private router:Router) { }
  public usuarios: Array<any>
  ngOnInit(): void {
  }

  info(){
   this.ident = localStorage.getItem('char')
   this.nom = localStorage.getItem('charco')
    this.ape=localStorage.getItem('charcas')
   this.mail= localStorage.getItem('charro')
  }

  deleteUser(){
  
    this.authService.deleteUser().subscribe(
      
      res => {
      console.log(res);
      this.router.navigateByUrl('/bilioteca/readusers')
     
   })
  }
  cancelar(){
    localStorage.removeItem('hola')
    this.router.navigateByUrl('/bilioteca/readusers')
  }
}
