'use strict'

var jwt = require("jwt-simple")
var moment= require("moment")
var secret = 'sudo_apt-get_install_jwt'

exports.createToken = function (user) {
    var payload = {
        sub: user._id,
        username: user.username,
        rol: user.rol,
        iat: moment().unix(),
        exp: moment().day(30, 'days').unix()
    }

    return jwt.encode(payload, secret)
}

