const express = require('express')
const auth = require('../../middlewares/auth')
const {shortListProfileController} = require('../../controllers')


const shortListedProfileRoute = express.Router()


shortListedProfileRoute.post('/' , auth() , shortListProfileController.addShortListProfile)


module.exports = shortListedProfileRoute