const router = require("express").Router()
const bcryptjs = require('bcryptjs')

const User = require('./../models/User.model')
const saltRounds = 10


router.get('/registro', (res, req, next) => {
    res.send('holiiiiiii')
})




module.exports = router