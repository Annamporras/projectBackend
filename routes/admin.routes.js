const router = require("express").Router()
const fileUploader = require('../config/cloudinary.config');
const { isLoggedIn } = require("../middleware/route-guard")
const User = require('./../models/User.model')






module.exports = router