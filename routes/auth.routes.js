const router = require("express").Router()
const bcryptjs = require('bcryptjs')

const User = require('./../models/User.model')
const saltRounds = 10

router.get('/', (req, res, next) => {
    res.render('index')
})


router.get('/registro', (req, res, next) => {
    res.render('auth/login-form')
})




module.exports = router