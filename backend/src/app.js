'use strict'

// variables globales
const express = require("express")
const app = express()
var CORS = require("cors")
const bodyParser = require("body-parser")


//CARGA DE RUTAS
    var user_route = require("./routes/userRoutes")
    var book_route = require("./routes/bookRoutes")
//MIDDLEWARES
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.use(CORS())

   

   

//RUTAS 
app.use('/api',user_route,book_route )

//EXPORTAR
module.exports = app



