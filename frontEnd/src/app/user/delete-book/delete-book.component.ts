import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(public authService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  deleteBook(){
  
    this.authService.deleteBook().subscribe(
      
      res => {
      console.log(res);
      this.router.navigateByUrl('/bilioteca/readbooks')
     
   })
  }
  cancelar(){
    localStorage.removeItem('idlibro')
    this.router.navigateByUrl('/bilioteca/readbooks')
  }
}
