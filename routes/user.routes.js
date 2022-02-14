const router = require("express").Router()

const { isLoggedIn } = require("../middleware/route-guard")
const User = require('./../models/User.model')

router.get('/perfil-usuario', isLoggedIn, (req, res, next) => {
    res.render("users/user-profile", { user: req.session.currentUser })
})

// router.get('/perfil-usuario/editar', isLoggedIn, (req, res, next) => {

//     res.render('users/edit-user-profile', { user: req.session.currentUser })
// })

module.exports = router