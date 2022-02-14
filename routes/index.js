module.exports = app => {


  app.use("/", require("./auth.routes"))

  // const userRouter = require('./user.routes')
  // app.use('/', userRouter)

}

