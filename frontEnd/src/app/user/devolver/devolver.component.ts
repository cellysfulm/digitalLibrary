import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-devolver',
  templateUrl: './devolver.component.html',
  styleUrls: ['./devolver.component.css']
})
export class DevolverComponent implements OnInit {
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
  devolver(frmUpdate:NgForm){
    this.authService.devolver(frmUpdate.value).subscribe(
      res => {
      console.log(res);
      this.router.navigateByUrl('/bilioteca/readbooks')
  })
}

}
