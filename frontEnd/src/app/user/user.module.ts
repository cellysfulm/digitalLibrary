import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {  HttpClientModule} from "@angular/common/http";
import { AuthRoutingModule } from "./user-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserService} from "../services/user.service";
import { BrowserModule } from '@angular/platform-browser';
import { GetUsers } from './getusers/getusers.component';
import { ReadbooksComponent } from './readbooks/readbooks.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HompComponent } from './homp/homp.component';
import { PrestarlibroComponent } from './prestarlibro/prestarlibro.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { DevolverComponent } from './devolver/devolver.component';

@NgModule({
  declarations: [RegisterComponent,LoginComponent,GetUsers,ReadbooksComponent,AddBookComponent,UpdateUserComponent,HompComponent,PrestarlibroComponent,MyBooksComponent,DevolverComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,

  ],
  providers:[UserService,GetUsers]
})
export class AuthModule { }
