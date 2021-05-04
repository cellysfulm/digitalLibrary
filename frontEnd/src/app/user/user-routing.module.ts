import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from "./register/register.component";
import {GetUsers} from "./getusers/getusers.component";
import { ReadbooksComponent } from './readbooks/readbooks.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LogoutComponent } from './logout/logout.component';
import { HompComponent } from './homp/homp.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ViewuComponent } from './viewu/viewu.component';
import { PrestarlibroComponent } from './prestarlibro/prestarlibro.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { DevolverComponent } from './devolver/devolver.component';


const routes: Routes = [
    {path:'register' ,component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'readusers',component:GetUsers},
    {path:'readbooks',component:ReadbooksComponent},
    {path:'addbook',component:AddBookComponent},
    {path:'updateuser',component:UpdateUserComponent},
    {path:'logout',component:LogoutComponent},
    {path:'home',component:HompComponent},
    {path:'deleteuser',component:DeleteuserComponent},
    {path:'deletebook',component:DeleteBookComponent},
    {path:'viesuser',component:ViewuComponent},
    {path:'prestarlibro',component:PrestarlibroComponent},
    {path:'mybooks',component:MyBooksComponent},
    {path:'returnbook',component:DevolverComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
