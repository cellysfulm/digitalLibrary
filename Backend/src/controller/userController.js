'use strict'

var bcrypt = require("bcrypt-nodejs");
var User = require('../models/users')
var Book = require('../models/books')
var jwt = require("../services/jwt");
var nodemailer = require('nodemailer');

//                    ***AQUI INICIAN LAS FUNCIONES DEL ADMIN***

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jpablomuralles@gmail.com',
      pass: '12345Han!'
    }
  });


function login(req,res) {
    var params = req.body
    var  user = new User()

    User.findOne( {$or:[{email:params.email},{username: params.email}]},(err,found)=>{
        if(err) return res.status(500).send("error")
        if(!found) {return res.status(404).send("el usuario no existe")}
        if(found) {
            console.log(found)
        //    console.log(params.password) 
            bcrypt.compare(params.password, found.password, (err,check) => {
         //   console.log(found.email) 
           // console.log(params.password) 
            console.log(check)
            //  console.log(found.password);
              if (check === true) {
                return res.status(200).send({
                  token: jwt.createToken(found)
                  
                });
              } else {
                user.password = undefined;
                return res
                  .status(404)
                  .send({
                    message: " nombre de usuario o contraseña incorrectos",
                  });
              }
            });
          } 
    })
}

function register(req,res) {
  var  user = new User()
  var params = req.body
 
    if (req.user.rol !="admin" ) { 
      console.log("req.user.sub: "+req.user.sub);
     
      return res.status(500).send("no tiene permiso de administrador")
     
    }else{
  
      var usn
      var email = params.email
      var name = params.name
      var carnet = params.carnet
      var lastname = params.lastname 
      user.name = name
      user.carnet = carnet
      user.rol = params.rol
      user.lastname = lastname
      user.email = email
      user.libros = []
      if (params.rol === "alumno") {
        var inicial = name.charAt(0)
        var separarA = lastname.split(" ")
        var apellido = separarA[0].toLowerCase()
        usn  = inicial.toLowerCase()+apellido+ "-"+carnet
      }
      if (params.rol === "catedrático") {
        var em = email.split("@")
        usn = em[0]+"-"+carnet.slice(0,-6)
      }
      user.name = name
      var password = Math.random().toString(36).substr(2, 8);
      user.username = usn
      User.findOne({$or:[{email: email},{username:usn}]},{email: email},(err,found)=>{
          if (found) {
              return res.status(500).send("este formulario contiene información que ya está en uso")
          }
          if (!found) {
              params.password = password
              bcrypt.hash(params.password, null, null, (err, hash) => {
                  user.password = hash;
                 var mensaje = "Hola "+ name + ", " +"tu usuario es: "+usn+ " y tu contraseña es: "+ password;
                  user.save((err,saved)=>{
                     
                      var mailOptions = {
                        from: '"Administración Biblioteca" <jpablomuralles@gmail.com>',
                        to: email,
                        subject: 'Bienvenido a la biblioteca digital',
                        text: mensaje
                      };
                    
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email enviado: ' + info.response);
                        }
                      });
                      return res.status(200).send(saved)
                  })
                  
              })
          }
      })
    }
  
}
function deleteUser(req,res) {
  var id = req.params._id
 // var  user = new User()
  if (req.user.rol != "admin") {
    return res.status(500).send("no tiene permiso de administrador")
  }else{
    User.findByIdAndDelete(id,(err,adminUs)=>{
     if(err) return res.status(500).send("error")
     if(!adminUs) return res.status(404).send("no se encontró el usuario")
     if (adminUs && adminUs.rol != "admin") {
       var email = adminUs.email
       var mensaje = "Adiós " + adminUs.name + " fue un gusto tenerte con nosotros "
      var mailOptions = {
        from: '"Administración Biblioteca" <jpablomuralles@gmail.com>',
        to: email,
        subject: 'Llegó la hora de decir adiós',
        text: mensaje
      };
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
       return res.status(200).send(adminUs)
     }
    })
  }
}
function editUser(req,res) {
  var user = new User()
  var id = req.params._id
  var params = req.body
  var name = params.name
  var usn
  var email = params.email
  var carnet = params.carnet
  var lastname = params.lastname 
if (req.user.rol != "admin") {
  console.log("ERR: no es admin");
  return res.status(500).send("no tiene permiso de administrador")
}else{
 
  User.findByIdAndUpdate(id,params,{new: true},(err,result)=>{
    if(err) return res.status(500).send(err)
    if(!result){ 
      console.log(err);
      console.log("no se encuentra el usuario") 
      return res.status(404).send("not found")}
 /*   if (result){
      if (params.rol === "alumno") {
        var inicial = name.charAt(0)
        var separarA = lastname.split(" ")
        var apellido = separarA[0].toLowerCase()
        usn  = inicial.toLowerCase()+apellido+ "-"+carnet
      }
      if (params.rol === "catedrático") {
        var em = email.split("@")
        usn = em[0]+"-"+carnet.slice(0,-6)
      }
      params.username = usn
      result.username = usn
      console.log(result);
      return res.status(200).send(result)
    }*/
    return res.status(200).send(result)
  })

}

}

function readUsers(req,res) {
  if (req.user.rol != "admin") {
    return res.status(500).send("no tiene permiso del admin")
  }else{

    User.find((err,users)=>{
      if(err) return res.status(500).send({ message: 'Error en la peticion de Usuarios' })
      if(!users) return res.status(404).send({ message: 'Error en la consulta de Usuarios' })
      return res.status(200).send(users)
    })
  }
}

//                    ***AQUI FINALIZAN LAS FUNCIONES DEL ADMIN***
function readUser(req,res) {
  var id = req.params._id
  User.findById(id,(err,resu)=>{
    return res.status(200).send(resu)
  })
}
function rentBook(req,res) {
  var userId = req.params._id 
  var bookId = req.params.bookId
  var params = req.body
  var user = new User()
  User.findByIdAndUpdate(userId,{$push:{libros:params.bookId}},{new: true},(err,result)=>{
    console.log(userId);
    if(!result) return res.status(404).send({ message: 'Error en la consulta de Usuarios' })
    Book.findOneAndUpdate({_id:params.bookId},{$inc:{disponibles:-1}},(err,bookf)=>{
      if(err) console.log(err);
      if(!bookf) console.log("err");
      console.log(bookf);
    })
    return res.status(200).send(result)
    
  })
}
function verlibros(req,res) {
  var userId = req.params._id 
  User.findById(userId,(err,resultado)=>{
    Book.populate(resultado,{path:"libros"},(err,libros)=>{
      return res.status(200).send(resultado.libros)
    })
  })
 
  
}
function devolver(req,res) {
  var userId = req.params._id 
 // var bookId = req.params.bookId
  var params = req.body
  var user = new User()
  User.findByIdAndUpdate(userId,{$pull:{libros:params.bookId}},{new: true},(err,result)=>{
    console.log(userId);
    if(!result) return res.status(404).send({ message: 'Error en la consulta de Usuarios' })
    Book.findOneAndUpdate({_id:params.bookId},{$inc:{disponibles:+1}},(err,bookf)=>{
      if(err) console.log(err);
      if(!bookf) console.log("err");
      console.log(bookf);
    })
    return res.status(200).send(result)
    
  })
}
module.exports = {
    deleteUser,
    register,
    login,
    editUser,
    readUsers,
    rentBook,
    readUser,
    devolver,
    verlibros
}