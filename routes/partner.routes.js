const router = require("express").Router()
const fileUploader = require('../config/cloudinary.config');
const { isLoggedIn } = require("../middleware/route-guard")
const User = require('./../models/User.model')
const { isOwner,isAdmin,isPartner,isUser,formatDate} = require ("../utils")


router.get('/perfil', isLoggedIn, (req, res, next) => {
    res.render("partners/partner-profile", { user: req.session.currentUser })
})

router.get('/perfil/editar/:_id', isLoggedIn, (req, res, next) => {
    const { _id } = req.params

    User
        .findById(_id)
        .then(user => res.render('partners/edit-partner-profile', user))
        .catch(error => next(error))

})


router.post('/perfil/editar/:_id', isLoggedIn, fileUploader.single('image'), (req, res, next) => {
    const { _id } = req.params
    const { username, email } = req.body

    User
        .findByIdAndUpdate(_id, { username, email, image: req.file?.path })
        .then(() => res.redirect(`/perfil/${_id}`))
        .catch(err => console.log(err))

})

router.get('colaboradores/mis-eventos', isLoggedIn, (req, res, next) => {

    User
        .find()
        .then(() => res.render('partners/created-events'))
        .catch(err => next(err))

})

module.exports = router