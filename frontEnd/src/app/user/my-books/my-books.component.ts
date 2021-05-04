import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookI } from 'src/app/interfaces/book';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  constructor(private service:UserService, private router:Router) { }
  public books: Array<any>
  token = localStorage.getItem('token')
  mm = localStorage.getItem('des')
  idbook: string
  bookname: string
  autorL: string
  ngOnInit(): void {
    this.mybook()
  }
  mybook(){
    this.service.mybook().subscribe(res =>{
      console.log(res);
      this.books = res
    })
  }
  devolver(xd:BookI){
    this.service.selectedBook = xd
    this.idbook =  xd._id
    this.bookname = xd.titulo
    this.autorL = xd.autor
    localStorage.setItem("idlibro",this.idbook)
    localStorage.setItem("nomBook",this.bookname)
    localStorage.setItem("autor",this.autorL)
    this.router.navigateByUrl('/bilioteca/returnbook')
  }
  regresar(){
    this.router.navigateByUrl('/bilioteca/readbooks')
  }
}
