const router = require("express").Router()
const bcryptjs = require('bcryptjs')

const User = require('./../models/User.model')
const saltRounds = 10


// registro users
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

//registro partners

router.get('/colaboradores/registro', (req, res, next) => {
    res.render('auth/partners-signup-form')
})

router.post('/colaboradores/registro', (req, res, next) => {
    const { username, email, category, password } = req.body

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashedpass => {
            return User.create({ username, email, category, password: hashedpass })
        })
        .then(createdUser => res.redirect('/'))
        .catch(err => next(err))
})


//  login 

router.get('/inicio-sesion', (req, res, next) => res.render('auth/login-form'))

// Login form (handle)
router.post('/inicio-sesion', (req, res, next) => {

    const { email, password } = req.body

    if (email.length === 0 || password.length === 0) {
        res.render('auth/login-form', { errorMessage: 'Por favor, rellena todos los campos' })
        return
    }

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login-form', { errorMessage: 'Email no registrado en la Base de Datos' })
                return
            } else if (bcryptjs.compareSync(password, user.password) === false) {
                res.render('auth/login-form', { errorMessage: 'La contraseña es incorrecta' })
                return
            } else {
                req.session.currentUser = user
                console.log('El objeto de EXPRESS-SESSION', req.session)
                res.redirect(`/perfil-usuario/${user._id}`)
            }
        })
})


//cerrar cesion 
router.post('/cerrar-sesion', (req, res) => {
    req.session.destroy(() => res.redirect('/inicio-sesion'))
})

module.exports = router