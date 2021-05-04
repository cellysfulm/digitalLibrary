import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { GetUsers } from '../getusers/getusers.component';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers:[UserService]
})
export class UpdateUserComponent implements OnInit {
  constructor(public authService:UserService, private router:Router,) { }
  usuario: UserI
 
  
  ngOnInit(): void {
  }
 
  updateUser(frmUpdate:NgForm,){
    this.authService.SupdateUser(frmUpdate.value).subscribe(
      res => {
      console.log(res);
      this.router.navigateByUrl('/bilioteca/readusers')
   })
  }
  
  }

