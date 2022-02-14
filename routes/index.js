module.exports = app => {

  const authRouter = require("./auth.routes")
  app.use("/", authRouter)

  const userRouter = require('./user.routes')
  app.use('/', userRouter)

}

