'use strict'

var bcrypt = require("bcrypt-nodejs");
var Book = require('../models/books')
var jwt = require("../services/jwt");

//                    ***AQUI INICIAN LAS FUNCIONES DEL ADMIN***

function AddMaterial(req,res) {
    var params = req.body
    var book = new Book()

    if(req.user.rol != "admin"){
        return res.status(200).send("no tiene permiso para realizar esta acción")
    }else{
        Book.findOne({titulo:params.titulo},(err,librin)=>{
            if(librin){
                return res.status(500).send("ya se cargó este libro anteriormente")
            }else{
                book.tipo = params.tipo
                var miprima = params.temas
                var miesposa = miprima.split(", ")
                var x = params.pclave
                var y = x.split(", ")
                switch (book.tipo) {
                    case "revista":
                        book.autor=params.autor
                        book.titulo= params.titulo
                        book.edicion= params.edicion
                        book.descripcion= params.descripcion
                        book.pclave=y
                        book.temas= miesposa
                        book.copias= params.copias
                        book.disponibles= params.copias
                        book.ejemplares= params.ejemplares
                        book.frecuencia= params.frecuencia
                        break;
                
                    case "libro":
                        book.autor=params.autor
                        book.titulo= params.titulo
                        book.edicion= params.edicion
                        book.descripcion= params.descripcion
                        book.pclave=y
                        book.temas= miesposa
                        book.copias= params.copias
                        book.disponibles= params.copias
                        break;
                }
                book.save((err,saved)=>{
                    if(err) return res.status(500).send(err)
                    if(!saved) return res.status(500).send("error al guardar contenido")
                    if (saved) return res.status(200).send(saved)
                })
                
            }
        
        })

    }


}
function DeleteBooks(req,res) {
    var id = req.params._id
    var params = req.body
    var book = new Book()
    if (req.user.rol != "admin") {
        return res.status(200).send("no tiene permiso para realizar esta acción")
    }else{
        Book.findByIdAndDelete(id,(err,deleted)=>{
            if(err) return res.status(500).send(err)
            if(!deleted) return res.status(500).send("error al eliminar contenido")
            if (deleted) return res.status(200).send(deleted)
        })
    }
}


function readBooks(req,res) {
    Book.find((err,found)=>{
        if(err) return res.status(500).send(err)
        if(!found) return res.status(500).send("error al mostrar contenido")
        if (found) return res.status(200).send(found)
    })
    
}
//                    ***AQUI FINALIZAN LAS FUNCIONES DEL ADMIN***   

function find(req,res) {
    var book = new Book()
    var params = req.body
    var buscar = params.find
    var charlie 
    
    Book.find((err,first)=>{
for (let i = 0; i < first.length; i++) {
    const element = first[i];
   // const texto = element.autor  //<=
   // console.log(element.autor);
    var separar = element.autor.split(" ")
  //  console.log(separar);
    for (let i = 0; i < separar.length; i++) {
        const maxstell = separar[i];
       
            console.log(maxstell);
           // charlie = 
        
        
        
    }
}
    Book.find(
        {$or:[
        {pclave:buscar},
        {temas:buscar},
        {autor:buscar},
        {titulo:buscar},
        {autor:charlie}
    ]
        },
        (err,found)=>{
    console.log(found);
        return res.status(200).send(found)
    })
    
    })
    

    
}
module.exports ={
    AddMaterial,
    DeleteBooks,
    readBooks,
    find
}