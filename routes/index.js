module.exports = app => {


  app.use("/", require("./auth.routes"))

  app.use('/', require('./user.routes'))
  app.use('/eventos', require('./event.routes'))
  app.use('/colaboradores', require('./partner.routes'))
}

