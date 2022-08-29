'use strict'

var express = require('express')
var userController = require('../controller/userController')
var md_auth = require('../middlewares/authenticated')


var api = express.Router();
api.post('/register',md_auth.ensureAuth,userController.register)
api.post('/login',userController.login)
api.delete('/deleteuser/:_id',md_auth.ensureAuth,userController.deleteUser)
api.put('/updateuser/:_id',md_auth.ensureAuth,userController.editUser)
api.get('/readusers', md_auth.ensureAuth,userController.readUsers)
api.put('/rentbook/:_id',md_auth.ensureAuth,userController.rentBook)
api.put('/devolver/:_id',md_auth.ensureAuth,userController.devolver)
api.get('/readuser/:_id', md_auth.ensureAuth,userController.readUser)
api.get('/mybooks/:_id',userController.verlibros)
module.exports = api