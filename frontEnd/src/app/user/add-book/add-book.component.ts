import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(public authService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  newBook(form:NgForm){
    this.authService.addBook( this.authService.selectedBook ).subscribe(
      res => {
      console.log(res);
      this.router.navigateByUrl('/bilioteca/readbooks')
   })
  }
}
