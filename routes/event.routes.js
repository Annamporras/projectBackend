const router = require("express").Router()
const bcryptjs = require('bcryptjs')
const Event = require('./../models/event.model')
const User = require('./../models/User.model')
const Comment = require('./../models/Comment.model')
const fileUploader = require('../config/cloudinary.config')
const { isLoggedIn } = require("../middleware/route-guard")
const { isOwner, isAdmin, isPartner, isUser, formatDate } = require("../utils")

// lista de eventos


router.get('/', (req, res, next) => {

    Event
        .find()
        .then(eventos => res.render("event/event-list", { eventos }))
        .catch(err => console.log("no se encuentra el evento"))
})


//crear evento 

router.get('/crear', (req, res, next) => { res.render("event/new-event") })

router.post('/crear', fileUploader.single('image'), (req, res, next) => {


    const { name, date, description, participants, comments, streetName, streetNumber, postCode, city, lat, lng, } = req.body;

    const address = {

        street: {
            streetName,
            streetNumber
        },
        postCode: postCode,
        city: city,

        location: {
            type: "Point",
            coordinates: [lat, lng],
        }
    }

    console.log(req.file, req.body, address,)

    Event
        .create({ name, date, description, participants, comments, image: req.file?.path, address, owner: req.session.currentUser._id })
        .then(() => res.redirect('/eventos'))
        .catch(err => {
            console.log('Oh! An error occurred when creating event', err)

        })
})

//eventos editar 
router.get('/editar/:id', isLoggedIn, (req, res, next) => {
    const { id } = req.params

    Event
        .findById(id)
        .then(evento => res.render('event/event-edit-form', evento))
        .catch(err => console.log(err))
})

router.post('/editar/:id', isLoggedIn, fileUploader.single('image'), (req, res, next) => {
    const { id } = req.params
    const { name, date, description, participants, comments, streetName, streetNumber, postCode, city, lat, lng } = req.body;
    const address = {

        street: {
            streetName,
            streetNumber
        },
        postCode: postCode,
        city: city,

        location: {
            type: "Point",
            coordinates: [lat, lng],
        }
    }

    Event
        .findByIdAndUpdate(id, { name, date, description, participants, comments, image: req.file?.path, address })
        .then(() => res.redirect(`/eventos`))
        .catch(err => console.log(err))
})




// eventos eliminar 

router.post('/:id/delete', isLoggedIn, (req, res, next) => {
    const { id } = req.params

    Event
        .findByIdAndDelete(id)
        .then(() => res.redirect('/eventos'))
        .catch(err => console.log('Oh! no se pude eliminar evento', err))
})


// ruta a los detalles del evento 

router.get('/detalles/:event_id', (req, res) => {


    const { event_id } = req.params

    Event
        .findById(event_id)
        .populate('participants', 'comments')       // Nombre del campo que se debe popular
        .then(evento => {

            res.render('event/event-details',
                { evento },
                // isOwner(req.session.currentUser._id, evento.owner),
                formatDate(evento.date))
        })
        .catch(err => console.log(err))
})

//routa post para el comentario 

// router.post('/detalles/:event_id'/comments, isLoggedIn, (req,res) => {
//     const { event_id} = req.params
// })


//routa post para asistir al evento 

// router.post('/detalles/:event_id'/participants, isLoggedIn, (req,res) => {
// const { event_id} = req.params })


module.exports = router