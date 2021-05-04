import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-prestarlibro',
  templateUrl: './prestarlibro.component.html',
  styleUrls: ['./prestarlibro.component.css'],
  providers:[UserService]
})
export class PrestarlibroComponent implements OnInit {
  usuario: UserI
  constructor(public authService:UserService, private router:Router,) { }
  subs: string
  title: string
  aur: string
  ngOnInit(): void {
    this.subs = localStorage.getItem('idlibro')
    this.title = localStorage.getItem('nomBook')
    this.aur = localStorage.getItem('autor')
  }
    prestar(frmUpdate:NgForm){
      this.authService.rentBook(frmUpdate.value).subscribe(
        res => {
        console.log(res);
        this.router.navigateByUrl('/bilioteca/readbooks')
    })
  }
}
