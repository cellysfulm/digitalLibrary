'use strict'

var express = require('express')
var bookController = require('../controller/bookController')
var md_auth = require('../middlewares/authenticated')


var api = express.Router();
api.post('/addbook',md_auth.ensureAuth,bookController.AddMaterial)
api.delete('/deletebook/:_id',md_auth.ensureAuth,bookController.DeleteBooks)
api.get('/getbooks',md_auth.ensureAuth,bookController.readBooks)
api.get('/find',md_auth.ensureAuth,bookController.find)


module.exports = api