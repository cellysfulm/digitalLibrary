'use strict'

var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = Schema({
   tipo: String,
   autor: String,
   titulo: String,
   edicion: String,
   descripcion: String,
   pclave: [],
   temas: [],
   copias:Number,
   disponibles: Number,
   // pa las revistas
   ejemplares: Number,
   frecuencia: String,
})
module.exports = mongoose.model('book', UserSchema)