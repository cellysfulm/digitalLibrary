import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookI } from 'src/app/interfaces/book';
import {UserService} from "../../services/user.service";
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-readbooks',
  templateUrl: './readbooks.component.html',
  styleUrls: ['./readbooks.component.css']
})
export class ReadbooksComponent implements OnInit {
  public books: Array<any>
  constructor(private UserService:UserService, private router:Router) { }
  token = localStorage.getItem('token')
  mm = localStorage.getItem('des')
  idbook: string
  bookname: string
  autorL: string
  ngOnInit(): void {
    this.readbook()
  }
  takeData(xd:BookI){//<= botón
    this.UserService.selectedBook = xd
    this.idbook =  xd._id
    this.bookname = xd.titulo
    this.autorL = xd.autor
    localStorage.setItem("idlibro",this.idbook)
    this.router.navigateByUrl('/bilioteca/deletebook')
  }
readbook(){
  this.UserService.readbook().subscribe(res =>{
    console.log(res);
    this.books = res
  })
}
prestar(xd:BookI){//<= botón
  this.UserService.selectedBook = xd
  this.idbook =  xd._id
  this.bookname = xd.titulo
  this.autorL = xd.autor
  localStorage.setItem("idlibro",this.idbook)
  localStorage.setItem("nomBook",this.bookname)
  localStorage.setItem("autor",this.autorL)
  this.router.navigateByUrl('/bilioteca/prestarlibro')
}

 alv(){
  this.router.navigateByUrl('/bilioteca/logout')
 }
 prestados(){
  this.router.navigateByUrl('/bilioteca/mybooks')
 }
}
