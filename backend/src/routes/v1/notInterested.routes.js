const express = require('express')
const auth = require('../../middlewares/auth')
const { notInterestedController } = require('../../controllers')

const notInterestedRoute = express.Router()

notInterestedRoute.post('/' ,auth() , notInterestedController.createNotInterested)



module.exports = notInterestedRoute