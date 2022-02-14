const router = require("express").Router()
const bcryptjs = require('bcryptjs')
const res = require("express/lib/response")
const Event = require('./../models/event.model')


router.get('/', (req, res, next) => res.render('event/event-list'))


//crear evento 
router.get('/crear', (req,res,next) =>    {

Event 
.find()
.then( eventos => res.render("event/new-event", {eventos}))
.catch (err => console.log ("no se encuentra el evento")) 
})


router.post('/crear', (req, res, next) => {

    const { name, date, address, city, } = req.body
      const location = { type : 'Point', coordinates: [ lat.toString(), lng.toString()]} 

    Event
        .create({  name, date, address, city,})
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log('Oh! An error occurred when creating event', err)
            res.render('event/new-event')
        })
})

module.exports = router