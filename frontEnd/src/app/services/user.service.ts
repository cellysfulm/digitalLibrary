import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtResponseI } from "../interfaces/jwt-response";
import { UserI } from "../interfaces/user";
import { tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
import { BookI } from '../interfaces/book';
import { $ } from 'protractor';
import { UpdateUserComponent } from '../user/update-user/update-user.component';
import { GetUsers } from '../user/getusers/getusers.component';
import jwt_decode from "jwt-decode";

@Injectable()
export class UserService {
  AUTH_SERVER : string = 'http://localhost:3000/api'
  authSubject = new BehaviorSubject(false)
  private token: string
  usuarioF = localStorage.getItem('hola')
  us = localStorage.getItem('idper')
  boo = localStorage.getItem('idlibro')
  toca = localStorage.getItem('token')
  log = localStorage.getItem('userID')
  selectedUser: UserI ={
   
    _id: '',
    username: '',
    name: '',
    lastname: '',
    password: '',
    carnet: '',
    rol: '',
    email:'',
    libros: []
  };
  selectedBook:BookI ={
    _id: '',
    pclave: [],
    temas: [],
    tipo: '',
    autor:'',
    titulo:'',
    edicion:'',
    descripcion:'',
    copias: '',
    disponibles:'',
    ejemplares:'',
    frecuencia:'',
  }
userAdd:UserI[]
bookAdd:BookI[]
usuarioS: GetUsers

  constructor(private httpCLient:HttpClient) { }

  login(authCredentials) {
    return this.httpCLient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,authCredentials
    )
  }
  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  
 decode(){
  var decoded = jwt_decode(this.token); 
  console.log(decoded)
 }

  getToken() {
   return localStorage.getItem('token');
  }

  logOut(){
    localStorage.clear()
  }
  getUsers(){
    var headers= new HttpHeaders().set('Content-Type','Application/json').set('Authorization',this.getToken())
    return this.httpCLient.get<any>(`${this.AUTH_SERVER}/readusers`,{headers:headers})//,authCredentials
  }
  register(data:UserI) {
    let params = JSON.stringify(data)
    let headers= new HttpHeaders().set('Content-Type','Application/json').set('Authorization',this.getToken())

    return this.httpCLient.post(this.AUTH_SERVER+'/register',params,{headers:headers})
    
  }
  readbook(){
    var headers= new HttpHeaders().set('Content-Type','Application/json').set('Authorization',this.getToken())
    return this.httpCLient.get<any>(`${this.AUTH_SERVER}/getbooks`,{headers:headers})//,authCredentials
  }
 
  addBook(data:BookI) {
    let params = JSON.stringify(data)
    let headers= new HttpHeaders().set('Content-Type','Application/json').set('Authorization',this.getToken())

    return this.httpCLient.post(this.AUTH_SERVER+'/addbook',params,{headers:headers})
    
  }
  deleteteUser(data){
    let params = JSON.stringify(data)
    let headers= new HttpHeaders().set('Content-Type','Application/json').set('Authorization',this.getToken())

    return this.httpCLient.delete(this.AUTH_SERVER+`/updateuser`,{headers: headers});
  } 

  SupdateUser(data){
    var header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    var params = JSON.stringify(data)
    return this.httpCLient.put(this.AUTH_SERVER+`/updateuser/${this.usuarioF}`, data,  {headers: header});
  }
  deleteUser(){
    this.usuarioF = localStorage.getItem('hola')
    var header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    return this.httpCLient.delete(this.AUTH_SERVER+`/deleteuser/${this.usuarioF}`,{headers: header});
  }
  deleteBook(){
    this.boo = localStorage.getItem('idlibro')
    var header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    return this.httpCLient.delete(this.AUTH_SERVER+`/deletebook/${this.boo}`,{headers: header});
  }
  viewUsu(){
    this.usuarioF = localStorage.getItem('hola')
    var header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    return this.httpCLient.get<any>(this.AUTH_SERVER+`/readuser/${this.usuarioF}`,{headers: header});
  }
  rentBook(data){
    var header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    var params = JSON.stringify(data)
    return this.httpCLient.put(this.AUTH_SERVER+`/rentbook/${this.log}`, data,  {headers: header});
  }
  mybook(){
    this.usuarioF = localStorage.getItem('hola')
    var header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    return this.httpCLient.get<any>(this.AUTH_SERVER+`/mybooks/${this.log}`,{headers: header});
  }
  devolver(data){
    var header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    var params = JSON.stringify(data)
    return this.httpCLient.put(this.AUTH_SERVER+`/devolver/${this.log}`, data,  {headers: header});
  }
}





