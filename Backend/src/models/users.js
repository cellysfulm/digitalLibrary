'use strict'

var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = Schema({
    carnet:String,
    email:String,
    name: String,
    username: String,
    lastname: String,
    password: String,
    rol:String,
    libros:[{ type: Schema.Types.ObjectId, ref: 'book' }]
})
module.exports = mongoose.model('user', UserSchema)