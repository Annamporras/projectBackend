const router = require("express").Router()
const bcryptjs = require('bcryptjs')

const User = require('./../models/User.model')
const saltRounds = 10

router.get('/', (req, res, next) => {
    res.render('index')
})


router.get('/registro', (req, res, next) => {
    res.render('auth/signup-form')
})

router.post('/registro', (req, res, next) => {
    const { username, email, password } = req.body

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashedpass => {
            return User.create({ username, email, password: hashedpass })
        })
        .then(createdUser => res.redirect('/'))
        .catch(err => next(err))
})




module.exports = router