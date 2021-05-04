'use strict'
var bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose")
const app = require("./app")
var User = require('./models/users')
app.get("/", (req, res) => {
    res.send("Hello World");
    });

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/Biblioteca',
{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    var  user = new User()
    User.findOne({rol:"admin"},(err,result)=>{
      //  console.log(result);
        if (result) {
            console.log("ya existe un admin");
            return ("ya existe un admin")
        }else{
            user.username = "admin"
            user.password = "admin"
            bcrypt.hash(user.password, null, null, (err, hash) => {
                user.password = hash;
            })
            user.rol="admin"
            user.save()
        }
    })

    console.log('correcto')
    app.set('port',process.env.PORT|| 3000) 
    app.listen(app.get('port'), ()=>{
        console.log(`puerto: ${app.get('port')}`)
    })
}).catch(err=>console.log(err))
